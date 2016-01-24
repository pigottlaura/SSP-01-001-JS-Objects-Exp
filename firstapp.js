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