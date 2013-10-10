// Aaron Budge
// October 10, 2013
// Expressions_Personal


//Calculate how much you will spend on laundry detergent each year

var detergentPrice = prompt("What do you pay for a bottle of laundry detergent?"); //Determine how much a user spends on a bottle of detergent.
var loadsPerBottle = prompt("How many loads can your bottle of detergent wash?"); //Determine how many loads each user specified bottle can wash.
var loadsPerWeek = prompt("How many loads per week do you do?"); //Determine how many loads of laundry the user does each week.

var yearlyCost = 52 * loadsPerWeek / loadsPerBottle * detergentPrice;