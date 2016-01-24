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
// the original z variable again. Variable shadowing is something that should be avoided,
// as it can return unexpected results, particuarly when you inadvertantly do it i.e. creating
// the local variable of z without realising you already had a global variable of z. The rule
// of thumb should be that if it needs to be global make it global, otherwise you should keep
// it local. This should help to avoid unnecessarily declaring variables repeatedly throughout
// your code, as you will always know where they will be needed.
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

console.log("\n------ CREATING OBJECTS ------");
var personA = {
    name: "Laura",
    age: 28,
    favSongs: ["Shine Your Light", "Someday We\'ll Know", "Some Nights"],
    addNewFavSong: function(song) {
        this.favSongs.push(song);
    },
    showFavSongs: function(){
        for(song in this.favSongs)
        {
            console.log(this.favSongs[song]);
        }
    }
}
personA.addNewFavSong("Hold the World");
personA.showFavSongs();

console.log("\n------ CREATING OBJECT PROPERTIES AFTER THE OBJECT ------");
// If the interpreter meets a reference to a property of an object that it has not
// seen before i.e. personB.growOlder, then it assumes it is the declaration of a
// new property and so no error will occur. This can be handy for creating additional
// properites on the fly, but should be something to watch out for as it can result in
// bugs in your code, without you even realising i.e. if I had a property declared within
// the object called growOld, and later referred to it as growOlder, then I have now got two
// properties in the object (growOld and growOlder). JavaScript will not throw and error
// for this, as it just assumes the new property was intentional, but it may cause me issues
// later as I could be unaware that I had inadvertantly created a new property in my object.
// Once an object has been created, I can continue to add new properties later on, as shown below.
var personB = new Object();
personB.name = "David";
personB.age = 25;
personB.showAge = function()
{
    console.log(this.name + " is " + this.age + " years old.");
}
personB.growOlder = function(){
    this.age++;
    console.log(this.name + " is now " + this.age + " years old.");
}
personB.showAge();
personB.growOlder();

console.log("\n------ OBJECT CONSTRUCTOR FUNCTIONS ------");
// All functions in JavaScript are actually objects, and therefore the Person function contains
// more than just the function. It infact contains a property of the same name i.e. Person, which
// contains the function. This means that this object can also hold other properties, along with
// it's own function property. We can therefore use this method to create a template for that type
// of object, and use the function to "construct" it i.e. in the below example, I am creating
// a Person object constructor, which takes in two arguments (pName and pAge), and then uses these
// parametres to assign values to the relevant properties. By creating an object in this way,
// we can then reuse this constructor to create multiple people, who will all have the same properties
// and methods (such as name and showAge()). Note - although these objects will all have the same
// properties, their values can and will all be different i.e. they will have different states.
// These objects can then have new properties added to them later on, as in the case of personD
// below, where they now have a property of favBooks.
var Person = function(pName, pAge)
{
    this.name = pName;
    this.age = pAge;
    this.showAge = function(){
        console.log(this.name + " is " + this.age + " years old.");
    };
    this.Person = function()
    {
        console.log("Making new Person");
    }
}

var personC = new Person("Marie", 27);
personC.showAge();

var personD = new Person("Barry", 24);
personD.showAge();
personD.favBooks = ["Harry Potter", "Lord of The Rings"];
for(book in personD.favBooks)
{
    console.log("One of " + personD.name + "\'s favourite books is " + personD.favBooks[book]);
}