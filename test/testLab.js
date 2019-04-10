/**
 * @description This file shows and explain some of the functions / methods available on mochajs framework.
 * @author David Avalos
 * @lastUpdate 09/04/2019
 */

/*
* These are imports so you are able to use other file's code.
*/
const assert = require('assert'); //Assertion lib from node
const dummy = require('../dummyFunctions'); //js file I created

/*
* This suite tests the functions under dummyFunctions.js
* 
* 'describe' = Test Suite
* 'it'       = Test case
*
* A Test will fail only when Error, Excepction or fail assertion is thrown / found
* else, it'll pass.
*/
describe("Dummy test suite", function(){
    it("This is a sample dummy test", function(){
        assert.equal(true, true);
    });

    it("sendRequest test", function(){
        assert.equal(dummy.sendRequest("Request message"),true);
    });

    it("checkPostedValues test", function(){
        assert.equal(dummy.checkPostedValues(),true);
    });

    it("deleteValue test", function(){
        assert.equal(dummy.deleteValue(1954678),false);
    });

    it("changeValue test", function(){
        assert.equal(dummy.changeValue(1954678, 999999),false);
    });

});

/**
 * This test suite shows the usage of Mocha's Hooks by keeping track of how many TC's are executed.
 *
 * 1.Declare counter
 * 2.Initialize counter on 'before' hook
 * 3.Add +1 and print the current TC number on 'beforeEach' hook
 * 4.Print that # TC is finished on 'afterEach' hook
 * 5.Print total TC's on 'after' hook 
 * 
 * I also added a special variable called 'skip'
 * All it does is indicate if we are going to skip the test suite execution (Mark Test Cases as Pending)
 * This happens becasue we evalutate the boolean at the 'before' hook and when 'false' it executes this.skip()
 * which does exactly that, skip the test suite
 * 
 * NOTE: skip can also be applied at test level
 * */

describe("Hooks test suite", function(){
    
    let testCount;
    let skip = false;

    before("This runs before all tests in block", function(){
        console.log("Before Hook - Test suite beggining execution...");
        if (!skip) this.skip();
        testCount = 0; //Initialize test counter
    });

    after("This runs after all tests in block", function(){
        console.log("After Hook - Test suite ending execution...");
        console.log("Total executed tests: "+testCount); //When test suite is finished we can print the Total TCs executed.
    });

    beforeEach("This runs before each test", function(){
        testCount++; //Adding +1 to the counter
        console.log("Starting Test #"+testCount);
    });

    afterEach("This runs after each test", function(){
        console.log("Ending test #"+testCount+"\n");
    });

    it("First Test", function(){
        assert.ok(true);
    });

    it("Second Test", function(){
        assert.ok(true);
    });

    it("Third Test", function(){
        assert.ok(true);
    });
});

/**
 * Root hooks are basically hooks declared outside all 'describe' blocks
 * Root hooks will apply for every 'describe' block that you're executing.
 * Doesn't matter if the root is not on the file you're executing, the root hook will be executed
 */
beforeEach("This will run before of each test on every file you run", function(){
    console.log("Root hook");
});

/**
 * Pending tests - Basically is a test case without a callback
 * Mocha will mark the test as 'pending' if executed
 * The main idea is to leave this code so, someone, develops the test in the future.
 */
describe("Pending tests", function(){

    it("Here you should describe the test that someone should develope later"); //Notice the test doesn't have a callback.
});

/**
 * this.retries(numberOfTries) indicates that a fail test case will be executed again until it passes or reaches number of tries (parameter sent)
 * 
 * There are two ways to call this function:
 * 1.At suite level     - It will execute tests within the suite the given number of times or until it passes.
 * 2.At Test Case level - It will execute that particular test the given number of times or until it passes. 
 * Use option 2 for special Tests that, for some reason, require a higher number of attempts.
 */

describe("Retries", function(){
    let totalExecutions;

    this.retries(1); //This indicates that any test case without a 'retry' will execute one more time if needed

    before(function(){
        totalExecutions = 0;
    });

    beforeEach(function(){
        totalExecutions++;
    });

    after(function(){
        console.log("Total executions: "+totalExecutions)
    });

    it("Retry test", function(){
        this.retries(2); //This indicates that this specific test will be executed up to 2 times
        assert.ok(totalExecutions>2); //It will pass if the suite has executed mor than 3 Tests
    });

    it("Second retry test", function(){
        //Notice we don-t have a 'Retry' here, so the suite level 'retry' will take place if this fails.
        assert.ok(totalExecutions>4); //Test will pass if the suite has executed more than 4 test,
    });
});

/**
 * By default Mocha keeps track on execution time for each test, most likely you'll see it on final execution status e.g (120ms)
 * Also, Mocha has a default definition of slow, which is 75ms. Any test that take more than that will mark the execution time in red.
 * A "Normal" execution time is slow/2, in default case would be 37.5ms, so anything between 37.6ms and 74.9ms would mark time execution in yellow.
 * Anything below slow/2 is considered a good execution time and Mocha doesn't botter to point that out, so you won't see that test case's execution time.
 * 
 * If you execute below test suite you should see what I'm talking about.
 */
describe("Performance Tests with default value",function(){   

    //This should generate a red time mark right side to the test result
    it("Slow Test", function(done){
        setTimeout(done, 75);
    });

    //This should generate a yellow time mark right side to the test result
    it("Normal Test", function(done){
        setTimeout(done,50);
    });

    //This doesn't generate a time mark
    it("Fast Test", function(){
        assert.ok(true);
    });
});

/**
 * Continuing with execution time track topic, Mocha also allows you set your own "slow" time definition
 * To do so you need to use the Slow() method which takes a number parameter in ms.
 * 
 * Now anything that equals or exceeds this new "slow" definition will be marked in red.
 * The "Normal" execution time would still be slow/2. In my code I set slow to 300ms, so "Normal" time would be 300/2 = 150ms
 * Again, anything below "Normal" execution time (150ms for this case) Mocha won't botter to anounce it.
 * 
 * Try it yourself.
 */
describe("Performance Tests with modified slow value",function(){   
    this.slow(300);

    it("Slow Test", function(done){
        setTimeout(done,300);
    });

    it("Normal Test", function(done){
        setTimeout(done,151);
    });

    it("Fast Test", function(){
        assert.ok(true);
    });

});

/**
 * Timeouts - There's three ways to set timeout. Suite-level and test-level.
 * 
 * Suite-level: Just add the method timeout(ms) indicating the timeout in ms time you want to set and that will apply for all tests on the suite.
 * unless you have a test-level timeout
 * 
 * Test-Level: It's the exact same but you call the timeout(ms) method inside the test. This will have priority over the suite-level timeout.
 * 
 * Hook-level: Again you need to put the timeout(ms) method inside the hook. 
 * Be careful, exceeding the time on hooks can cause the execution stop on all the suite.
 */
describe('Time Outs Suite', function() {
    this.slow(1000);
    this.timeout(500);

    beforeEach(function(done) {
        this.timeout(300); // A very long environment setup.
        setTimeout(done, 250);
    });
  
    it('Suite-Level timeout not exceeded', function(done) {
      setTimeout(done, 300);
    });
  
    it('Suite-Level timeout exceeded', function(done) {
      setTimeout(done, 500);
    });

    it("Test-Level timeout exceeded", function(done){
        this.setTimeout(200);
        setTimeout(done, 200);
    });
});