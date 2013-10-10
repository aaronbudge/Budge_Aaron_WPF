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

// Discounts

//Calculate the discounted price with and without tax.
var originalPrice = 300; //Initialize items original price
var percentDiscount = 10; //Initialize discount percentage
var itemName = "Phone"; //Initialize item name
var salesTax = 7.25; //Initialize tax rate

var total = originalPrice * (1-percentDiscount/100); //Calculate the total after discount without tax
var totalWithTax = total + salesTax/100 * total; //calculate total with tax after discount is applied
//Print out result for the discounted price with and without tax.
console.log("Your " + itemName + " was originally $" + originalPrice + ", but after a " + percentDiscount  + " discount, it is now $" + total + " " + "without tax, and $" + totalWithTax + " with tax.")