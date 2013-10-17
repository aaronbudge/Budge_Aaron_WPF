// Aaron Budge
// October 16, 2013
// Conditionals_Personal

//How many people can shower before the hot water runs out?
var waterTank = parseInt(prompt("How many liters of water does your tank hold?")); //Declare variable and initiate user prompt to determine water tank size
var waterFlow = parseInt(prompt("How many liters of water move through your shower head per minute?")); //Declare variable and initiate user prompt to determine water flow in liters per minute
var showerTime = parseInt(prompt("Enter the average time each person will shower?")); //Declare variable and initiate prompt to determine the per person shower time

var hotWaterTime = waterTank / waterFlow; //Declare, calculate and define variable
var totalPeople = hotWaterTime / showerTime; //Declare, calculate and define variable


if(hotWaterTime <= showerTime){ //Test condition
    console.log("One person will be able to shower for " + hotWaterTime + " minutes, before the water turns cold."); //Print out result to console log if the condition is true
}
