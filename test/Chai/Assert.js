/**
 * @description This file explains what is 'Assert' (sometimes refer as TDD) style for chai library and provides examples for what I consider 
 * basic or useful not so common assertion functions. To see the full list of assertion functions with examples please go to https://www.chaijs.com/api/assert/
 * @author David Avalos
 * @lastUpdate xx/04/2019
 */
 
/**
 * According with https://www.chaijs.com/api/assert/ the 'Assert' style is very similar to node.js’ included assert module, with a bit of extra sugar. 
 * It is called 'assert' style because it follows the classic assert.*(); style, which is very similar to mocha assert library and many other test framework assert libs. 
 * 
 */

/**
 * First things first. Install chai. You can find a guide on how to do that on chaijs official site.
 * 
 * After you installed it make sure you add the chai library to the file, like the line below.
 */

const assert = require('chai').assert;

/***********************************IMPORTANT NOTE*************************************  
 * To run chai tests use the following command:                                       *
 * npm test                                                                           *
 *                                                                                    *
 * if your test are located in some other folder please specify that on the command:  *
 * npm test ./<path>/*                                                                *
 *                                                                                    *
 * You may now proceed                                                                *
***************************************************************************************/

/**
 * Assert - chai has it's own assert function. 
 * It's simple, just add a boolean expression + a message in case the TC fail and there you go
 */
describe("Assert function", function(){

  it("Assert boolean", function(){
    assert(true, "Message in case the TC fails");
  });

  it("Assert expression", function(){
    assert(0==0, "Message in case the TC fails");
  });

  //This is failed on purpose to test the fail message functionality
  it("Assert fail", function(){
    assert(0==1, "Message in case the TC fails");
  });
});
 
/**
 * Fail function does exactly that, fails the test case.
 * You basically have two options:
 * 1.Just fail the TC and send a message
 * 2.Fail the TC including the expected, actual and a message.
 */
describe("Fail Function", function(){

  it("Trigger a fail",function(){
    assert.fail("This is a fail TC"); //This fails the TC printing a message
  });

  it("Trigger a fail with expect and actual",function(){
    //This fails the TC and prints the expexted, actual and a message
    assert.fail("This is the expected","This is the actual","This is a fail TC");
  });
});

/**
 * isOk - This function will pass for all "trutty" values
 * In other words, this will fail unless you get false, undefined or null.
 */
describe("isOk Function", function(){
  
  //Pass
  it("Trutty value", function(){
    assert.isOk(true, "Fail message");
  });

  //Pass
  it("Expression", function(){
    assert.isOk(0==0, "Fail message");
  });

  //Pass, even though this is not boolean not an expression
  it("Trutty value", function(){
    assert.isOk('everything', "Fail message");
  });

  //Fail
  it("False value", function(){
    assert.isOk(false, "Fail message");
  });

  //Fail because x is undefined
  it("Undefined", function(){
    assert.isOk(x, "Fail message");
  });

  //Fail because we evaluate a null value
  it("Null", function(){
    assert.isOk(null, "Fail message");
  });

});
  
/**
 * isNotOK - This is just the opposite of isOK function
 * It will pass only when you get a false or null value.
 * 
 * Yes, 'undefined' fails on both cases.
 * 
 * Btw, for (almost) each function on chai library there is a negative like thisusing the 'not' negative
 * like isOK has isNotOK. 
 * And they always behave the exact opposite. For that reason I'm only explaining this one, the rest you can find them on ... 
 * ... guess (chaijs official site)
 * 
 */
describe("isNotOK", function(){
  
  //Fail
  it("true", function(){
    assert.isNotOk(true,"Fail message");
  });

  //Fail
  it("test",function(){
    assert.isNotOk("test","Fail message");
  });
  
  //Fail
  it("0==0", function(){
    assert.isNotOk(0==0,"Fail message");
  });

  //Pass
  it("true", function(){
    assert.isNotOk(false,"Fail message");
  });

  //Pass with undefined variable
  it("undefined variable", function(){
    assert.isNotOk(x,"Fail message");
  });

  //Pass with null value
  it("null", function(){
    assert.isNotOk(null,"Fail message");
  });

});

/**
 * Equal - It compares two values, pass if equal else fail
 * Only thing to consider is the type conversion. 
 * This function will attempt to convert type before failing, so 1 == '1'
 */
describe("Equal", function(){

  //Pass
  it("Equal values",function(){
    assert.equal(1,1, "Fail message");
  });

  //Pass due to type conversion
  it("Equal with type conversion",function(){
    assert.equal(1,'1', "Fail message");
  });

  //Fail
  it("Fail comparison",function(){
    assert.equal(0, 1, "Fail message");
  });
});

/**
 * StrictEqual - It works the same as 'Equal' function with one tiny big difference
 * This won't attempt any type conversion, so 1 != '1'
 */
describe("Strict Equal", function(){

  //Pass
  it("Equal values",function(){
    assert.strictEqual(1,1, "Fail message");
  });

  //Fail due to this function don't attempt type conversion
  it("Equal with type conversion",function(){
    assert.strictEqual(1,'1', "Fail message");
  });

  //Fail
  it("Fail comparison",function(){
    assert.strictEqual(0, 1, "Fail message");
  });
});

/**
 * Deep Equal - This compares two objects. 
 * It will pass as long the structure of the objects are the same.
 */
describe("Deep Equal", function(){

  //Pass
  it("Array comparison",function(){
    assert.deepEqual([0,1],[0,1], "Fail message");
  });

  //Fails. The values are the same but the order is different.
  it("Array fail comparison",function(){
    assert.deepEqual([0,1],[1,0], "Fail message");
  });

  //Pass
  it("Array fail comparison",function(){
    assert.deepEqual({ color: "blue"},{color: "blue"}, "Fail message");
  });

  //Fail. They have same property name but different value.
  it("Array fail comparison",function(){
    assert.deepEqual({ color: "blue"},{color: "red"}, "Fail message");
  });

});

/**
 * exists - This funciton will pass unles you get a null or undefined.
 * You might notice this is very similar to isOK, the difference is that in this case a 'false' value will pass.
 */
describe("Exists", function(){

  //Pass
  it("String value",function(){
    assert.exists("Test", "Fail message");
  });

  //Pass
  it("True",function(){
    assert.exists(true, "Fail message");
  });

  //Pass
  it("False",function(){
    assert.exists(false, "Fail message");
  });

  //Undefined variable
  it("Undefined",function(){
    assert.exists(x, "Fail message");
  });

  //Null value
  it("null",function(){
    assert.exists(null, "Fail message");
  });
});

/**
 * isFunction - It does exactly what you'd expect, tells you wheter that you are evaluating is a funciton or not.
 * If it is a function TC passes, else fails.
 */
describe("is Function", function(){

  //Pass with an anonymous function that does nothing
  it("Function",function(){
    assert.isFunction(function(){},"Fail message");
  });

  //Fail with a string
  it("Not a function",function(){
    assert.isFunction("test", "Fail message");
  });

});

/**
 * typeOf - It takes two input parameters.
 * 1.A value that can be of any type
 * 2.The expected data type from the first value. This is indicated as a String.
 * 
 * The TC will pass when that first value type matches the expected. 
 */
describe("Type Of", function(){
  it("Object",function(){
    assert.typeOf({ tea: 'chai' }, 'object', 'we have an object');
  });


  it("Array",function(){
    assert.typeOf(['chai', 'jasmine'], 'array', 'we have an array');
  });

  it("String",function(){
    assert.typeOf('tea', 'string', 'we have a string');
  });

  it("Regexp",function(){
    assert.typeOf(/tea/, 'regexp', 'we have a regular expression');
  });

  it("Null",function(){
    assert.typeOf(null, 'null', 'we have a null');
  });

  it("Undefined",function(){
    assert.typeOf(undefined, 'undefined', 'we have an undefined');
  });

});

/**
 * instanceOf - Asserts that value is an instance of constructor.
 * This means the test will pass as long as the first parameter is an object created from the second function parameter
 * else, it'll fail.
 */
describe("instanceOf", function(){

  //First I created a function and save it on 'Tea' variable
  let Tea = function (name) { this.name = name; }
  , chai = new Tea('chai'); //Then I execute the function and save the instance on 'chai' variable

  //This TC will pass since 'chai' is an instance of 'Tea'
  it("Correct instance",function(){
    assert.instanceOf(chai, Tea, "Fail message");
  });

  //In this case 'x' is an undefined variable, so it will fail.
  it("Incorrect instance",function(){
    assert.instanceOf(x, Tea, "Fail message");
  });
});

/**
 * Include - Asserts that the second parameter is found in the first one.
 * Parameters could be any data type but of course to make a pass TC they should match (for starter).
 * 
 * Also, in the official documentation the first parameter is called  "haystack" and the second "needle"
 * I guess it is some kind of joke or something.
 */
describe("Include", function(){
  //First some usefull examples
  it("Array success",function(){
    assert.include([1,2,3], 2, 'array contains value');
  });

  it("String success",function(){
    assert.include('foobar', 'foo', 'string contains substring');
  });

  it("Data dictionary success",function(){
    assert.include({ foo: 'bar', hello: 'universe' }, { foo: 'bar' }, 'object contains property');
  });

  //Now let's see couple of fail scenarios starting with the obvious
  it("Value not found on Array",function(){
    assert.include([1,2,3], 4, 'array contains value');
  });

  //Now let's assume for some reason we have a dat type missmatch
  it("Data type missmatch",function(){
    assert.include('4', 4, 'string contains substring'); 
    //Oops! this one passes, so this function attemps data conversion before asserting. You should keep that in mind ;)
  });
  
});

/**
 * Match - This function allows you to evaluate a regexp (second param)
 * If it matches the first param the Tc will pass.
 */
describe("Match", function(){
  it("Success regexp",function(){
    assert.match('foobar', /^foo/, 'regexp matches');
  });

  it("Fail regexp",function(){
    assert.match('foobar', /^x/, 'regexp matches');
  });
});

/**
 * hasAnyKey - This function takes two objects both having keys (such as a data dictionary). 
 * The assert will pass if any of the keys on the second parameter are present on the first one.
 * So, the only case where this will fail is when none of the keys matches.
 */
describe("hasAnyKey", function(){

  //Pass
  it("Data dictionary vs Array",function(){
    assert.hasAnyKeys({foo: 1, bar: 2, baz: 3}, ['foo', 'iDontExist', 'baz']);
  });

  //Pass
  it("Data dictionary vs Data dictionary",function(){
    assert.hasAnyKeys({foo: 1, bar: 2, baz: 3}, {foo: 30, iDontExist: 99, baz: 1337});
  });

  //Pass
  it("Data dictionary and Array mix 01",function(){
    assert.hasAnyKeys(new Map([[{foo: 1}, 'bar'], ['key', 'value']]), [{foo: 1}, 'key']);
  });

  //Pass
  it("Data dictionary and Array mix 02",function(){
    assert.hasAnyKeys(new Set([{foo: 'bar'}, 'anotherKey']), [{foo: 'bar'}, 'anotherKey']);
  });

  //Fail
  it("Data dictionary vs Array Fail",function(){
    assert.hasAnyKeys({foo: 1, bar: 2, baz: 3}, ['test', 'iDontExist', 'false']), "This test is supposed to fail";
  });

  //Fail
  it("Data dictionary vs Data dictionary Fail",function(){
    assert.hasAnyKeys({foo: 1, bar: 2, baz: 3}, {test: 30, iDontExist: 99, false: 1337});
  });

});

/**
 * closeTo - This function compares two values, just like the Equal function.
 * The difference is this provides a delta parameter which allows you add an error range.
 * Also, this works only with numbers.
 */
describe("closeTo", function(){
  it("Success",function(){
    assert.closeTo(1.5, 1, 0.5, 'Not close enough');  
  });

  it("Fail",function(){
    assert.closeTo(3, 1, 0.5, 'Not close enough');
  });

});
 