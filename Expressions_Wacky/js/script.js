// Aaron Budge
// October 10, 2013
// Expressions_Wacky


//Calculate how many flowers you will have to buy for your spouse this month.

var fightsPerMonth = parseInt(prompt("How many times per month do you argue with your spouse?"));
var homeLate = parseInt(prompt("How many times did you stay out late this month?"));
var trashRemoval = parseInt(prompt("How many time did you forget to take out the trash this month?"));

var bouquet = ["3 Lilly's", "3 Tulips", "3 Daisy's", "3 Roses"];

var lilly = parseInt(bouquet[0]);
var tulip = parseInt(bouquet[1]);
var daisy = parseInt(bouquet[2]);
var rose = parseInt(bouquet[3]);

var flowersInBouquet = lilly + tulip + daisy + rose;
var totalBouquets = fightsPerMonth + homeLate + trashRemoval;

var flowersGiven = totalBouquets * flowersInBouquet;
console.log("You will need to purchase " + flowersGiven + " flowers for your wife this month.");

