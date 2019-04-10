/**
 * @description This document explains how callbacks work in javascript
 * @author David Avalos
 * @lastUpdate 09/04/2019
 */


/**
 * Before learning callbacks we need to know how to create and execute functions in javascript
 */

/**
 * Java like function.
 * 
 * Use the keyword 'function' followed by a name, parentheses and braces. 
 * Put function's code within the braces and there you go.
 */
function regular(){
    console.log("out: This is my regular js function");
}

regular(); //This is how you execute above function

/**
 * Variable assigned function
 *  
 * Is the same as the first one but here you assign the function to a variable.
 * This is more likely when the function returns a value.
 */
var anonymousFunction = function(text) { return "out: Anonymous function says : '"+text+"'" }

console.log(anonymousFunction('Hello!')); //This is how you execute above function, variable name and sending parameters within parentheses.
//A print to console is required to see the output due the function only returns a string, it doesn't print it.

/**
 * Arrow function
 * 
 * This is a way to write a function in one single line which, as the previous one, is also assigned to a variable.
 * Notice we don't use a 'function' keyword, instead we just put whatever parameters we need within parentheses then an arrow (=>) and after that you can put your code.
 * Probably this won't be convenient when functions are large.
 */
var arrowFunction = (a, b) => "out: "+ (a+b);

console.log(arrowFunction(4,3)); //This is how you call an arrow function, pretty much the same as the variabe assigned function ('cause it is also assigned to a variable).

/**
 * Callback - It is the action to pass a function as parameter to another function and this second function executes the first one.
 *  
 * This concept is better used when working with asynchronous processes but also mocha is built all around this.
 */

/**
 * Below function executes a callback.
 * First thing to notice is that it only takes one parameter which is expected to be a function and in fact that's validated on line 63
 * 
 * So when the given parameters is not a function no callback will be executed, instead an error message will be printed (Line 66).
 * But if the parameter is a function our firstCallBack function will execute it on line 64
 * 
 */
function firstCallBack(callback){
    console.log("out: This is my callback function");
    if(typeof callback === "function"){ //Validates the received parameter is a function.
        callback(); //Executes the function received in the parameters. This is the callback.
    }else{
        console.log("out: Function parameter expected. Parameter callback is not a function.");
    }
}

/**
 * First way to execute callback function. 
 * 
 * Execute the function as a regular function and send as argument an existing function (only the name, no parentheses).
 * In this case I sent the already existing function 'regular'.
 *  
 * */
firstCallBack(regular);

/**
 * Second way to execute callback function. 
 * 
 * Writing an anonymous function within arguments parenthesis.
 * Anonymous function is a function without name. They are mainly used on callbacks and when the function isn't planned to be re-usable. 
 */
firstCallBack(function(){
    console.log("out: Second way to execute a callback");
});

/**
 * This is also a callback function but it takes one extra parameter
 * @param {function} callback is the function that will be called back.
 * @param {string} param1 is a string that will be added to the printed message.
 * 
 */
function secondCallBack(param1, callback){
    console.log("out: This is my second callback function");
    if(typeof callback === "function"){
        console.log(callback(param1));
    }else{
        console.log("out: Function parameter expected. Parameter callback is not a function.");
    }
}

/**
 * So now isntead sending just the function parameters you also need to send a string parameter.
 * 
 * Again, here we use an already existing function.
 */
secondCallBack("This is a callback param", anonymousFunction);

/**
 * Here's an example of a callback with more than one param and an anonymous function
 */
secondCallBack("Another callback param", function(text){
    return "out: Printing my text: " + text;
});

/**
 * The below examples will retrieve an error due that we're not sending a function as parameter.
 */
firstCallBack(1);
secondCallBack(1,1);