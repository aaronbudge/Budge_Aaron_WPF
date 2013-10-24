// Aaron Budge
// October 24,2013
// Functions_Wacky

// Calculate the chances your neighbors are Vampires

var skin = prompt("On a scale of 1 - 10, how pale is their skin?"); //Declared variable and initialized user prompt to rate paleness of skin
var aging = prompt("On a scale of 1 - 10, rate their lack of aging."); //Declared variable and initialized user prompt to rate signs of aging
var sunlight = prompt("Have you ever seen them in sunlight?\n\(a\) Yes\n\(b\) No"); //Declared variable and initialized user prompt

function calcVampOdds(s, a){ //Named and initialized function and set parameters
    return s * a; //Code to perform and return when function is called
}

var odds = calcVampOdds(skin, aging); //Declare result variable for function return after being called, and set arguments

if(sunlight === "a"){ //Condition to check
    console.log("Vampires cannot be in sunlight. Your neighbors are not vampires.");//Print out to console log if condition is true
}else{
    var food = prompt("Have you ever seen them consume any food?\n\(a\) Yes\n\(b\) No");
    if(food === "a"){
        console.log("Vampires do not consume food. Your neighbors are not vampires.");
    }