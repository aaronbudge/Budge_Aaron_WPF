// Aaron Budge
// October 17, 2013
// Conditionals_Industry

// Web Design Cost Calculator

// How much will it cost to design and develop a basic website?
var pages = parseInt(prompt("How many pages will your site have?")); //Declare variable and initiate user prompt
var design = parseInt(prompt("How many pages will have a different design than the homepage?")); //Declare variable and initiate user prompt

var addPage = 3; //Declare, define, and initialize the hours needed to code each additional page
var addDesign = 4; //Declare, define, and initialize the hours needed to design each additional page design
var hourlyRate = 25; //Declare, define and initialize hourly rate

pages--; //Decreased page amount by 1 to account for homepage included in base coding hours (15)

var codingHrs = 15 + pages * addPage; //Declare and initiate the total hours needed for page coding
var designHrs = 20 + design * addDesign; //Declare, define, and initialize the total hours needed for page design
var totalHours = codingHrs + designHrs; //Declare, calculate and define the total hours for project

var codingCost = codingHrs * hourlyRate;
var projectCost = totalHours * hourlyRate; //Declare, define and calculate the total amount billed to the customer

console.log("We can design and develop your site for $" + projectCost + " dollars."); //Print out result to console.log





