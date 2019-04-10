/**
 * @description This document explains the scope of javascript vairables.
 * @author David Avalos
 * @lastUpdate 09/04/2019
 * 
 * In declarations.js file you can find a definition for each of this declarations with examples and explanation on how they work at global level.
 * In this document we will compare global vs local behavior.
 * 
 * Global level - Means that the variables (or anything that is global level) can be used through all the document. In this case the js file.
 * Local level - Anything that can only be accesed at the specific code block.
 * Code block - Basically anything within braces { local level } such as functions or for loops.
 * 
 * For each of the below examples we will follow the same process:
 * 1.Declare the global variable 
 * 2.Print it to console
 * 3.Create a function
 * 4.Declare a variable inside the function with the same as the globarl variable, this wil be our local variable and will be only avaiable inside the function.
 * 5.Print the local variable to console.
 * 6.Call the function (Execute it).
 * 7.Print again the global variable  
 */

/**
 * Undeclared variable.
 * 
 * In the below example the variable inside the function replaces the value of the global variable because to javascript they're both the same.
 * 
 * When you have a global undeclared variable 
 * and you use a variable with the same name in some other process / function 
 * the original value of the global variable will be changed.
 * 
 * Undeclared variables will always be global level variables, it doesn't matter if they were created inside a function or any other code block.
 * So if you add a new undeclared variable inside the function and the ntry to modify its value outside the function javascript will allow it becuase it'll be a global variable.
 * 
 * Undeclared variables could lead to changing global variable's value without wanting to. Best practice is -Always declare your variables-
 * 
 * TL;DR Always declare your variables.
 */

//Global assignation.
undeclared = "01 - Undeclared variable";
console.log(undeclared)


function undeclaredVar(){
    undeclared = "01 - Changed value"; //Function level declaration.
    console.log(undeclared)
}

undeclaredVar();
console.log(undeclared); //Value assigned to global variable after function execution. output: 01 - Changed value

/**
 * as Global variable
 * 
 * In this first 'var' example we declare a global variable named 'myVar' and then try to replace its value inside the function.
 * Since the global variable is accessible for all the document the value will be changed.
 */

//Declaring a Global variable
var  myVar = "02 - First Assigned value";
console.log(myVar);

function declaredVar(){
    myVar = "02 - Second Assigned value"; //Re-assigning global variable value (notice I did not use the 'var' keyword again)
    console.log(myVar);
}

declaredVar();
console.log(myVar); //output: 02 - Second Assigned value

/**
 * 'var' Variable  with Global and Local variable
 * 
 * In this example we have a declared global variable 'myVar' and a local 'myVar'.
 * Since the second variable is created inside the function, javascript considers it a completely different variable, so each one will preserve its value. 
 */

//Declaring a Global variable
var  myVar02 = "03 - First Assigned value";
console.log(myVar02);

function declaredVar02(){
    var myVar02 = "03 - Second Assigned value"; //Re-declaring the variable inside the function. This creates a new variable with a local (function) scope.
    console.log(myVar02); //output: 03 - Second Assigned value
}

declaredVar02();
console.log(myVar02); //Print global value. It keeps the original assigned value since the global variable wasn't modified. output: 03 - First Assigned value

/**
 * Global let variable 
 * 
 * This basically works teh same as the 'var' global.
 */

//Declaring global let
let myLet = "04 - First Assigned value";
console.log(myLet);

function declaredLet(){
    myLet = "04 - Second Assigned value"; //re-assign value of Global let
    console.log(myLet)
}

declaredLet();
console.log(myLet); //Print global value. This prints the value assigned within the function declaredLet. output: 04 - Second Assigned value


/**
 * Re-declare a 'let' variable
 * 
 * In this case we declare two 'let' variables, one at global scope and the other to local scope.
 * So when assigning a value to the variable inside the function the value of the global variable is preserved.
 */

//Declaring global let
let myLet02 = "05 - First Assigned value";
console.log(myLet02);

function declaredLet02(){
    let myLet02 = "05 - Second Assigned value"; //re-declaring myLet to local scope. This prints locally assigned value.
    console.log(myLet02) //out: 05 - Second Assigned value
}

declaredLet02();
console.log(myLet02); //Print global value. This prints the globally assigned value. output: 05 - First Assigned value

/**
 * 'const' Global access
 * 
 * Basically a global constant can be accessed from anywhere inside the document but its value can never be changed.
 */

//Declaring global let
const myConst = "06 - First Assigned value";
console.log(myConst);

function declaredConst(){
    console.log(myConst); //Accesing global constant. output: 06 - First Assigned value
}

declaredConst();
console.log(myConst); //Proving global const can be accessed on any other global part of the code. output: 06 - First Assigned value

/**
 * 'const' Local access
 * 
 * On the other hand a local 'const' can only be accessed from within the code block and its value can never be changed.
 */

function declaredConst02(){
    const myConst02 = "07 - First Assigned value";
    console.log(myConst02); //output: 07 - First Assigned value
}

declaredConst02();
//console.log(myConst02); //This will cause en Error due to only Local access allowed to "myConst02".

/*******************************REFERENCES***************************************************
 *                                                                                          *
 * WARNING: Below link is in spanish                                                        *
 * https://medium.com/@tatymolys/var-let-y-const-donde-cuando-y-por-qu%C3%A9-d4a0ee66883b   *
 *                                                                                          *
 * More information on variables can be found on declarations.js file of this project       *
 *                                                                                          *
 ********************************************************************************************/