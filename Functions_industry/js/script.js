// Aaron Budge
// October 23, 2013
// Functions_industry

//Convert a fixed width layout to a fluid width layout by converting pixels to percentages
var totalWidth = prompt("Please enter the total available width in pixels."); //Declare variable and initiate user prompt to determine total width
var target = prompt("Please enter your targeted width in pixels."); //Declare variable and initiate user prompt to determine targeted width

function calcPercent(target, total){ //Declare and define function
    return target / total * 100; //Code to be calculated and returned when the function is called
}

var percent = calcPercent(target, totalWidth); //Declared result variable, called and passed arguments to calcPercent function

if(totalWidth === "" && target === ""){ //Set conditions to check
    console.log("You haven't entered any information. Please try again.");
}
