// Aaron Budge
// October 16, 2013
// Conditionals_Personal

//How many people can complete their shower before the hot water runs out?
var waterTank = parseInt(prompt("How many liters of water does your tank hold?")); //Declare variable and initiate user prompt to determine water tank size
var waterFlow = parseInt(prompt("How many liters of water move through your shower head per minute?")); //Declare variable and initiate user prompt to determine water flow in liters per minute
var showerTime = parseInt(prompt("Enter the average time each person will shower?")); //Declare variable and initiate prompt to determine the per person shower time

var hotWaterTime = waterTank / waterFlow; //Declare, calculate and define variable
var totalPeople = hotWaterTime / showerTime; //Declare, calculate and define variable


(hotWaterTime <= showerTime) ? console.log("One person will be able to shower for " + hotWaterTime + " minutes, before the water turns cold.") : console.log(parseInt(totalPeople) + " people will be able to complete their shower before the water turns cold."); //Test condition and print 1st result to console log if true and 2nd result if false

