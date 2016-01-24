/**
* Created with SSP-01-001-JS-Objects-Exp.
* User: pigottlaura
* Date: 2016-01-24
* Time: 03:52 PM
* To change this template use Tools | Templates.
*/

/* Methods of printing out to the console*/

// Using console directly
console.log("\n------ CONSOLE.LOG ------");
console.log("Log a Message in the Console");
console.info("Information Message");
console.warn("Warning Message");
console.error("Error Message");

/* Using functions */
console.log("\n------ FUNCTIONS ------");
function printMessage(message)
{
    console.log(message);
}
printMessage("Hello World - using printMessage function");

/* Using Itteration */
console.log("\n------ ITTERATION ------");
var printMultiple = function(message, itterate)
{
    for(var i=0; i < itterate; i++)
    {
        console.log(message + " " + i);
    }
}
printMultiple("Multiple Message", 10);

/* Variable Scope */
console.log("\n------ GLOBAL VARIABLES ------");
// The variable x can be accessed from all areas of the code, as it has been
// declared globally i.e. outside of all functions and code blocks. This means
// that it can be accessed out in the main code, as well as within other
// functions.
var x;
function assignValue()
{
    x = 2;
}
assignValue();
console.log("x = " + x);

console.log("\n------ LOCAL VARIALBES ------");

function makeY()
{
    var y = 4;
    console.log("y = " + y);
}
makeY();
//console.log(y); will return undefined, as y was declared within a code block (function)
//and so is not a recognised variable outside of the makeY function.

console.log("\n------ VARIALBE SHADOWING ------");
// The variable z that was declared within the assignNewValue() function is a local variable,
// which temporarily shadows the global variable i.e. within the function assignNewValue()
// when we refer to z, we are referring to the local variable created within that code block,
// and can no longer reference the global variable z which was declared previously. As with
// the global variable example above, once we return to the main code, we can now reference
// the original z variable again.
var z = 6;
function assignNewValue(newVal)
{
    var z = newVal;
    console.log("Local variable z = " + z);
}
assignNewValue(8);
console.log("Global variable z = " + z);

console.log("\n------ DECLARATION HOISTING ------");
// When variables are declared, JavaScript automatically pulls these declarations to the top of
// the code block within which they exist i.e. a funciton, or the main code. So as you can see
// in the below example printVariables(), when we first try and log out the value of c, it 
// hasn't been created yet, but the result does not return that the variable is undefined, it 
// instead returns that it's value is undefined. That is because JavaScript has hoisted the 
// declaration of the variable to the top of it's available scope i.e. the printVariables function. 
// Note - it does not hoist the initialisation or assignment of the value to the variable, just 
// to declaration of the variable. So in essence, what's really happening behind the scenes is that
// JavaScript interprets the printVariables() function in the order shown in the printMoreVariables()
// function. The declaration of the c variable is pulled to the top, but it won't be initialised
// until later on in the function
function printVariables()
{
    var a = 5;
    var b = 7;
    console.log("a = " + a + "; b = " + b + "; c = " + c);
    var c = 9;
    console.log("a = " + a + "; b = " + b + "; c = " + c);
}
printVariables();
function printMoreVariables()
{
    var a = 5;
    var b = 7;
    var c;
    console.log("a = " + a + "; b = " + b + "; c = " + c);
    c = 9;
    console.log("a = " + a + "; b = " + b + "; c = " + c);
}
printMoreVariables();