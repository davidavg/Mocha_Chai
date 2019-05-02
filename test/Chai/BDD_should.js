/**
 * @description This file explains the usage of BDD-Should assert style for chai library
 * @author David Avalos
 * @lastUpdate 
 */
 
 /**
  * The BDD style is exposed through expect or should interfaces. In both scenarios, you chain together natural language assertions
  * For a more detailed explanation please visit https://www.chaijs.com/guide/styles/
  */

/**
 * The list of chainable functions is not very extense but is not short either, So I won't cover all of it in this document.
 * Also, you have a good amount of assertion methods (basically the last function on your chain)
 * 
 * For a ocmpelte list and explanation on them please visit https://www.chaijs.com/api/bdd/
 */

 
/***********************************IMPORTANT NOTE*************************************  
 * To run chai tests use the following command:                                       *
 * npm test                                                                           *
 *                                                                                    *
 * if your test are located in some other folder please specify that on the command:  *
 * npm test ./<path>/*                                                                *
 *                                                                                    *
 * You may now proceed                                                                *
***************************************************************************************/
//First of all you need to make a reference to the expect function
var expect = require('chai').should();

//The below variable are created for testing purposes
var myString = "test", myNumber = 0;

/**
 * BDD is all about chainable funcitons which will create an assertion that can be read in as BDD style.
 * In this document we are using Should style so we start every sentence with valueToAssert.should.chain.assert(expected)
 * 
 * Where:
 * valueToAssert = Value we send to compare vs and expected one
 * chain = keywords that will form the readable sentence, each of them is separated by a dot (e.g. to.be.*)
 * assert = is the assertion function from chai library (e.g. equal)
 * 
 * Our first example evaluates the data type of our asserted value vs an expected one.
 */
describe("Data Type tests", function(){

    //Here I send a string and asks chai to evaluate if the sent value is a String, and it is.
    it("Expect to be a String Success", function(){
        myString.should.be.a('String');
    });

    //This sends a number and asks chai to evaluate if it is a number, and it is.
    it("Expect to be a Number Success", function(){
        myNumber.should.be.a('number');
    })

    //This last example fails due that we evaluate if the sent value is a String, which is not, it's a number.
    it("Expect to be a Number Fail", function(){
        myNumber.should.be.a('String');
    });
});

/**
 * Value comparison is included in almost every assertion library and chai is not the exception.
 * Again, the idea is to be able to read the code as a regular english sentence.
 */

describe("Comparison Tests", function(){

    //This first test expects myString to be equal to 'test', it is.
    it("Test String Equality Success", function(){
        myString.should.equal('test');
    });

    //Same as former test but with numeric values.                  
    it("Test Number Equality Success", function(){
        myNumber.should.equal(0);
    })
});

/**
 * Also boolean comparison / validation is very common on assertion libraries.
 * In this case you only add at the end of the chain the expecte boolean
 */

describe("Boolean Comparison", function(){

    it("Simple boolean comparison", function(){
        true.should.be.true;
    });

    //You can get your boolean by either providing a value, doing an expression or calling a function (that returns a boolean value).
    it("Boolean Expression validation", function(){
        (myNumber == 0).should.be.true;
    })
});
