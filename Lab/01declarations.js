/**
 * @description This document explains the different types of variable declaration that exist on javascript and how they work at global level.
 * @author David Avalos
 * @lastUpdate 09/04/2019
 * 
 * Global level - Means that the variables (or anything that is global level) can be used through all the document. In this case the js file.
 * 
 * There are 4 basic ways to create a variable in javascript:
 * 1.Creating it without any declaration
 * 2.Declare using 'var' keyword
 * 3.Declare using 'let' keyword
 * 4.Declare using 'cons' keyword
 * 
 * Those for will be explained in this document with their inplications.
 */


/** 
 * Set an undeclared variable
 * 
 * This occours when you write a non-keyword and non-variable word and assign a value to it.
 * In this scenario javascript will create a variable with the assigned value but It is not recommended to do this (Although it works).
 * Best practice is to always declare your variables since that's the way javascript is intented to be used.
 * 
 * Mainly two things can go wrong when doing this:
 * 1.If, for whatever reason, your code tries to use your undeclared variable before it gets a value assigned, the code will throw an error and that should not happen.
 * Correct behaivor is that a variable with no value should return 'undefined', not an error.
 * 
 * 2.If the code is executed in "strict mode" you will get an error for all undeclared variables. 
 * Strict mode makes sure you followed all the "best practices" before executing, such as declaring all your variables, using ; at the end of each sentence, etc.
 *  
 * TL;DR Always declare your variables
 */

//console.log(undeclared); //This will produce an error due to lack of declaration (hoisting not happening).

undeclared = "My undeclared variable";
console.log(undeclared);

undeclared = "Modified value for undeclared";
console.log(undeclared);

undeclared = 23;
console.log(undeclared);

/** 
 * Declare a variable using keyword 'var'
 * 
 * This is the most basic way to declare a variable, it allows you to declare, assign value, re-assign value and even re-declare the variable or use it before it is declared.
 * Yes, in this case (and forward) it won't be a (major) problem if your code uses a variable before it gets a value assigned or even before it is declared. 
 * It will use an 'undefined' value instead sending an error. 
 * This is due to one particular characteristic of javascript, the hoisting.
 * 
 * Hoisting means that any variable you declare will be executed as if you declared it at the top of the code block (e.g for loop, function or even a module)
 * Take the below code as an example. I use the variable 'myVar' before it is declared, but it only retrieves an 'undefined' value, after that I declare it and assign a value.
 * Here javascript takes my declaration and (internally) move it to the very top of the module (which in this case is my code block).
 * 
 * You can find more examples at scopes.js file
 * 
 */

console.log(myVar); //This is a hoisting test; Expected is 'undefined'.

var myVar = "This is my var";
console.log(myVar);

myVar = 29; //re-assign the value of my var.
console.log(myVar);

var myVar = "Declaring again my var"; //This is possible but not recommendable.
console.log(myVar);

/**
 * Declare a variable using let
 * 
 * the 'let' kerword also declares a variable, just as 'var', but this is more intended to be used within block of codes (for loops, functions, etc) not on global variables.
 * It has couple of disadvantages comapred to 'var' when used on global level (which is the case for this entire document).
 * 
 * 1.Hoisting doesn't work for 'let' variables at Global level. This means if your code tries to use the 'let' variables before it is declared, it's not gonna work.
 * 2.You can't re-declare the 'let' variable.
 * 
 * 'let' will help you to not re-declare variables (which is not a best practice) but in the other hand it cannot hoist at global level which is a major disadvantage.
 * For this reason I'll go with 'var' to declare global variables, although not everybody recommend to use global variables. Use them with discretion.
 */

//console.log(myLet); //This is a hoisting test; Expected is an Error; Let can't be hoisted on global level.

let myLet = "This is my LET";
console.log(myLet);

myLet = 29; //re-assign the value of my var
console.log(myLet);

//let myLet = "Declaring again my var"; //This produces an error. Let can't be re-declared.
//console.log(myLet);

/**
 * Declare a constant
 * 
 * To do this you use the 'const' keyword. 
 * It does exactly that, creates a constant. It can't change its value during execution, it can't be re-declared and it doesn't hoist.
 * So basically this goes at the very top of whatever code you want to use it in and assign it a value immediately.
 */

//console.log(myConst); //This will produce an Error. Const can't be hoisted.

const myConst = "This is my CONST";
console.log(myConst);

//myConst = "Trying to modify my const, what am I thinking?!"; //Constants can't be modified, what a surprise, right? #sarcasm

//const myConst = "This is a little more valid test, but not that much"; //This also throws an error. Constants can't be re-declared.

/****************************************************************
 * More hoist and variables examples are found on scope.js file *
 ****************************************************************/