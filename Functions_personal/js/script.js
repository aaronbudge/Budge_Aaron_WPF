// Aaron Budge
// October 23,2013
// Functions_personal

//Calculate how many gallons of water your bathtub can hold.

var tubLength = prompt("Please enter the interior length of your tub, in inches."); //Declare variable and initialize user prompt to determine tub length
var tubWidth = prompt("Please enter the interior width of your tub, in inches."); //Declare variable and initialize user prompt to determine tub width
var tubDepth = prompt("How many inches are between the bottom of your tub and the tubs overflow spout?"); //Declare variable and initialize user prompt to determine tub depth

var calcGallons = function(l, w, d){ //Declare and define anonymous function
    return l * w * d / 231; //Code to calculate and return when function is called
}

var gallons = calcGallons(tubLength, tubWidth, tubDepth);