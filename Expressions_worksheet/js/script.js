// Aaron Budge
// October 9, 2013
// Expressions Worksheet


//Dog Years

//Calculate how old Sparky is in dog years based on his actual age
var actualAge = 5; //Declare and define given variable

var dogAge = actualAge * 7; //Declare and define result variable
//Print out result of age in dog years
console.log("Sparky is" + " " + actualAge + " " + "human years old which is" + " " + dogAge + " " + "in dog years");

//Slice of Pie part 1

//Calculate how many slices of pizza each party guest ate
var pizzaSlices = 7; //Declare and define given variable
var partyGuests = 31; //Declare and define given variable
var pizzasOrdered = 12; //Declare and define given variable

var pizzaPerGuest = pizzaSlices * pizzasOrdered / partyGuests; //Declare and define result variable
//Print out result showing how many slices each guest ate
console.log("Each person ate" + " " + pizzaPerGuest + " " + "slices of pizza at the party.");

//Slice of Pie part 2

//Calculate how many slices are left for Sparky after evenly dividing whole slices to the guests
var pizzaSlices = 7; //Declare and define given variable
var partyGuests = 31; //Declare and define given variable
var pizzasOrdered = 12; //Declare and define given variable

var remainingSlices = (pizzaSlices * pizzasOrdered) % partyGuests; //Declare and define result variable
//Print out result showing how many slices remain for Sparky
console.log("Sparky got" + " " + remainingSlices + " " + "slices of pizza.");

// Average Shopping Bill

//Calculate the average amount spent on groceries over the past five weeks
var weeklyTotals = [79, 121, 53, 178, 200]; //Declare and Define weekly grocery spending in an Array

var groceryTotal = weeklyTotals[0] + weeklyTotals[1] + weeklyTotals[2] + weeklyTotals[3] + weeklyTotals[4]; //Calculate the total amount spent on groceries
var averageTotal = groceryTotal / 5;
//Print out result for the average amount spent on groceries over the past five weeks
console.log("You have spent a total of $" + groceryTotal + " " + "on groceries over 5 weeks. That is an average of $" + averageTotal + " " + "per week.");

