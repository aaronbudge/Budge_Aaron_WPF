// Aaron Budge
// October 10, 2013
// Expressions_Industry

//Calculate how much a freelance web designer should charge per hour

var yearlyBizCost = prompt("Please enter the total cost of your annual business expenses."); //Determine the total cost of the users annual business expenses
var yearlyPersonalCost = prompt("Please enter the total cost of your annual personal expenses.");
var weeksPerYear = prompt("How many weeks per year do you intend to work?");
var daysPerWeek = prompt("How many days per week will you work?");
var hoursPerDay = prompt("How many hours will you work each day?");
var profitGoal = prompt("How much profit would you like to earn annually?");

var totalExpenses = Number(yearlyBizCost) + Number(yearlyPersonalCost) + Number(profitGoal);
var billableHours = weeksPerYear * daysPerWeek * hoursPerDay;

var hourlyRate = totalExpenses / billableHours;
console.log("Your hourly rate should start at $" + hourlyRate + " per hour.");
