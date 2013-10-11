// Aaron Budge
// October 10, 2013
// Expressions_Industry

//Calculate how much a freelance web designer should charge per hour

var yearlyBizCost = parseInt(prompt("Please enter the total cost of your annual business expenses.")); //Determine and parse the total cost of the users annual business expenses
var yearlyPersonalCost = parseInt(prompt("Please enter the total cost of your annual personal expenses.")); //Determine and parse the total annual cost of the users personal expenses
var profitGoal = parseInt(prompt("How much profit would you like to earn annually?")); //Determine and parse the amount of profit the user would like to earn
var weeksPerYear = prompt("How many weeks per year do you intend to work?"); //Determine how many weeks per year the user works
var daysPerWeek = prompt("How many days per week will you work?"); //Determine how many days per week the user works
var hoursPerDay = prompt("How many hours will you work each day?"); //Determine how many hours per day the user works.

var totalExpenses = yearlyBizCost + yearlyPersonalCost;//Calculate the total of personal and business expenses
var billableHours = weeksPerYear * daysPerWeek * hoursPerDay; //Calculation to determine the amount of billable hours

var hourlyRate = totalExpenses / billableHours; //Calculation of hourly rate based on total expenses divided by billable hours
console.log("Your hourly rate should start at $" + hourlyRate + " per hour."); //Print out of hourly rate result to console log
