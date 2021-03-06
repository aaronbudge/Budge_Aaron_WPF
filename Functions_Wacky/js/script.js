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
}else{ //Code to be performed if previous condition is false
    var food = prompt("Have you ever seen them consume any food?\n\(a\) Yes\n\(b\) No"); //Declare variable and initiate user prompt
    if(food === "a"){ //Set condition to check
        console.log("Vampires do not consume food. Your neighbors are not vampires."); //Print out to console if condition is true
    }else{
        var injury = prompt("Have you ever seen them sustain an injury?\n\(a\) Yes\n\(b\) No"); //Declared variable and initiate user prompt
        if(injury === "a"){ //Set condition to check
            console.log("Vampires do not sustain injuries. Your neighbors are not vampires."); //Print out to console if condition is true
        }else if(odds < 50){ //Set condition to check if previous statement is false
            console.log("Based on your answers, there is a " + odds + "\% chance your neighbors are Vampires. You may want to gather more information just to be sure.");//Print out to console log if condition is true
        }else if(odds > 70){ //Set condition to check if previous statement is false
            console.log("Based on your answers, there is a " + odds + "\% chance your neighbors are Vampires. Now would be a good time to stock up on crosses and holy water.");//Print out to console log if condition is true
        }else{
            console.log("Based on your answers, there is a " + odds + "\% chance your neighbors are Vampires. You might not want to invite them over for dinner."); //Print out to console log if previous conditions are false
        }
    }
}