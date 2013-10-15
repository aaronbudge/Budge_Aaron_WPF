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
    //Code to perform if condition is false
    console.log("You only have " + gasInTank + " gallons of gas in your tank, better get gas now while you can!");
}

//Group 2: Multiple Results

//Check the Login
//Is the username and password correct?
var username = prompt("Please enter your username."); //Created variable and user prompt for "username"
var password = prompt("Please enter your password."); //Created variable and user prompt for "password"
var accountName = "username"; //Initialize variable with string value
var accountPassword = "password"; //Initialize variable with string value

if(username === accountName && password === accountPassword){  //Test multiple conditions
    console.log("Welcome, " + username + "!"); //Print to console if condition is true
}
if(username != accountName){ // Test condition
    console.log("User not found. Try again."); //Print to console if condition is true
}