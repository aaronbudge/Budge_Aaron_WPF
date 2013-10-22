// Aaron Budge
// October 22, 2013
// Functions_worksheet

// Circumference

//Calculate the circumference of a circle

var radius = 6; //Declared and defined variable
var circumference = calculateCirc(radius); //Declared result variable for function call using an argument
console.log("The circumference of the circle is " + circumference + " inches."); //Print result to console log after function is performed and returned to the result variable.

function calculateCirc(r){ //Code to be performed when called
    return r * 2 * 3.14; //Result returned to function call variable
}

//Stung!

//Calculate bee stings needed to kill an animal

var vicWeight = 200; //Declared and defined variable
var beeStings = calcBeeStings(vicWeight); //Declared result variable and argument for function call
console.log("It takes " + beeStings + " bee stings to kill this animal.");
