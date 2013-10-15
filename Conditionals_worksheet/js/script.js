// Aaron Budge
// October 14, 2013
// Conditionals_worksheet


//Group 1: Expressions with Conditionals

//Last Chance for Gas!
//Can you make it across the desert with your current fuel?
var mpg = 17; //Initialize gas efficiency in miles per gallon
var tankLevel = .35; //Initialize the reading from the gas gauge
var tankCapacity = 25; //Initialize how much gas the gas tank will hold

var gasInTank = tankCapacity * tankLevel; //Calculate how much gas is in the tank
var milesTillEmpty = gasInTank * mpg; //Calculate how many miles the car can go before running out of gas

if(milesTillEmpty > 200){ //Test condition
    //Code to perform if condition is true
    console.log("Yes, you can make it without stopping for gas!");
}else{
    console.log("You only have " + gasInTank + " gallons of gas in your tank, better get gas now while you can!");
}