// Aaron Budge
// October 23, 2013
// Functions_industry

//Convert a fixed width layout to a fluid width layout by converting pixels to percentages
var totalWidth = prompt("Please enter the total available width in pixels."); //Declare variable and initiate user prompt to determine total width
var target = prompt("Please enter your targeted width in pixels."); //Declare variable and initiate user prompt to determine targeted width

function calcPercent(t, c){ //Declare and define function
    return t / c * 100; //Code to be calculated and returned when the function is called
}