/**
 * @description This file shows and explain most of the assertion types the mocha built-in library supports.
 * @author David Avalos
 * @lastUpdate 09/04/2019
 */

const assert = require('assert');

//Asserting with node assert built-in module
describe("This my 'assertion' test suite", function(){
    
    /*
    * Assert just evaluates a boolean... 
    * you could well use an 'if' sentence
    * but hey! here you can have a message parameter in case it fails, cool, right? (not too much)
    */
    it("Assert dummy test", function(){
        assert(true, "This is the message displayed when the test fails - assert dummy");
    });

    /*
    * Assert.equal takes two values and compares them. 
    * If data type mismatch between the two entries it will first try to do a type conversion
    * so '1' == 1 will pass.
    * Don't trust me, try it yourself
    */
    it("Assert equal", function(){
        assert.equal(1,1);
    });

    /*
    * Assert.deepEqual checks for a structural match. 
    * For instance, you can compare two arrays, if they contain the same data (in the same order) your test passes
    * In this case [1,2]=[1,2] but [1,2] != [2,1]
    * 
    * Another example, if you have two X objects the test will pass as long as their porperties are the same
    * 
    * var x = { a : { n: 0 } };
    * var y = { a : { n: 0 } };
    * 
    * deepEqual will evaluate as x = y (pass)
    * 
    * Also, deepEqual will attempt type conversion whenever a mismatch is found
    * so ['1','2']=[1,2] (pass)
    */
   it("Assert deep equal", function(){
        assert.deepEqual([1,2], [1,2], "This message is displayed when test fails - deep equal");
    });

    /*
    * Assert.deepStrictEqual is the same as deepEqual 
    * with the small huge differente that deepStrictEqual will expect the same data types as well.
    * so [1,2]=[1,2] but ['1','2'] != [1,2] , unlike deepEqual which both tests would pass.
    * 
    * Again, don't truste me, try it yourself.
    */
    it("Assert deep strict equal", function(){
        assert.deepStrictEqual([1,2],[1,2], "This messagae is displayed when test fails - deep strict equal");
    });

    /*
    * Assert.doesNotThrow is very straight forward. 
    * The paramater you send must be a function and, in order to pass, it should NOT throw any error / exception,
    *
    * In this case I'm sending a function that all it does is throw an excepction returning a value of 0.
    * Hence, this will always fails.
    * If you want to see it pass just comment the line with the throw command and there you go.
    */
    it("Assert does not throw", function(){
        assert.doesNotThrow(function(){
            throw 0;
        }, "This message is displayed when test fails - does not throw");
    });

    /*
    * Assert.fail does exactly that, fail.
    * So you don't have to do assert.equal(false); 
    *
    * The parameter it takes is the message displayed in the fail test.
    */
    it("Assert fail", function(){
        assert.fail("This message will be displayed in the test results - Assert Fail");
    });

    /*
    * Assert.ifError takes only one parameter usually refer as "value"
    * The test will pass as long the parameter is either 'undefined' or 'null'.
    * In this case the test will always pass since I'm sending a 'null' value
    * 
    * In real life this is used to test a paramater usually called "error" or "err" which (I'm guessing) 
    * is a callback variable that will be not defined (undefined) or null until an error is detected in the callback function.
    * In this scenario the "error" parameter will return whatever error has been thrown making the test fail.
    *
    */
    it("Assert ifError", function(){
        assert.ifError(null);
    });

    /*
    * Remember Assert.deepEqual? well, this is its negative case.
    * So when you compare [1,2],[1,2] this will fail since it is expecting a difference between the objects structure.
    * 
    * Don't forget that this method attemps type conversion when finding type mismatch
    * So ['1','2']=[1,2] which will result also in a fail
    * 
    * If you change the structure of the object then this test will pass
    * such when comparing values like [1,2],[2,1]. Same values + different order = different object = Pass test
    */
    it("Assert not deep equal", function(){
        assert.notDeepEqual([1,2],[2,1], "This message will be displayed in the test results - Not Deep Equal");
    });

    /*
    * Assert.NotDeepStrictEqual is the same as notDeepEqual
    * with the difference that this method won't attempt any type conversion
    * so comparing [1,2] and ['1','2'] will pass since they are different (due to different data types)
    * 
    * Remember this method is looking for the objects to be different by structure
    */
    it("Assert not deep strict equal", function(){
        let x = { p1: "Test"};
        let y = { p1: 2};
        assert.notDeepStrictEqual(x,y,"This message will be displayed in the test results - Not Deep Strict Equal");
    });

    /*
    * Assert.notEqual will pass as long as the compared values are different
    * The only consideration you need to take is that this method attempts data conversion
    * So if you compare 1 and '1' it will fail
    */
    it("Assert not equal", function(){
        assert.notEqual(true,false,"This message will be displayed in the test results - Not Equal");
    });

    /*
    * Assert.notStrictEqual looks for different values
    * but unlike "notEqual" this one won't make any data type conversion
    * so in this case 1 and '1' are differents making your test pass.
    */
   it("Assert not strict equal", function(){
        assert.notStrictEqual(1,'1',"This message will be displayed in the test results - Not Strict Equal");
   });

   /*
   * Assert.ok will fail when the given value is 'false' or 0 ("Falsy" values according to nodejs.org)
   * The rest of the values will pass
   * 
   * You can use it to send a boolean expresion as a parameter so it can be evaluated.
   */
   it("Assert ok", function(){
        assert.ok(123 > 12,"This message will be displayed in the test results - Ok");
   });

   /*
   * Assert.StrictEqual is the same as Assert.equal
   * with the difference that strict mode won't attemp any data type conversion
   * So yes, again, 1 will be different to '1'
   */
   it("Assert strict equal", function(){
        assert.strictEqual(1,'1',"This message will be displayed in the test results - Strict Equal");
   });

   /*
   * Assert.throws is expecting a function as parameter
   * and basically it validates the function throws an error
   * if it doesn't then the test is a fail
   */
   it("Assert throws", function(){
        assert.throws(function(){
            throw 0;
        })
   });   

   //Commenting this due that doesNotReject and Rejects are not working correctly.
    /*var myPromise = new Promise(function(resolve, reject){
        result = false;
        if(result){
            resolve("Promise was fullfilled");
        }else{
            reject("Promise rejected");
        }
    })*/

    /*
    * Couldn't make this work
    * This page says it is deprecated: https://github.com/sindresorhus/core-assert/issues/3
    */
    it.skip("Assert does not reject", function(){
        assert.doesNotReject(myPromise.then(function(value){
            console.log("It Passed!");
        }, function(error){
            console.log("It Failed :(");
        }));
   });

    /*
    * Couldn't make this work
    * This page says it is deprecated: https://github.com/sindresorhus/core-assert/issues/3
    */
    it.skip("Assert rejects", function(){
        assert.rejects(myPromise.catch(function(error){
            console.log("It Failed :(");
        }));
   });
});

/********************************************REFERENCES**********************************************
 *                                                                                                  *
 *                                                                                                  *
 * call back:                                                                                       *
 * http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/               *
 * https://www.geeksforgeeks.org/javascript-callbacks/                                              *
 *                                                                                                  *
 * Promises:                                                                                        *
 * https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1                         *
 *                                                                                                  *
 * mocha:                                                                                           *
 * https://javascript.info/testing-mocha                                                            *
 *                                                                                                  *
 * W3School Mocha asserting methods:                                                                *
 * https://www.w3schools.com/nodejs/ref_assert.asp                                                  *
 *                                                                                                  *
 * NodeJs Assert built in library:                                                                  *
 * https://nodejs.org/api/assert.html                                                               *
 *                                                                                                  *
 * Functional programming js:                                                                       *
 * https://medium.freecodecamp.org/functional-programming-principles-in-javascript-1b8fc6c3563f     *
 *                                                                                                  *
 ****************************************************************************************************/