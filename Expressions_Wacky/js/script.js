// Aaron Budge
// October 10, 2013
// Expressions_Wacky


//Calculate how many flowers you will have to buy for your wife this month.

var fightsPerMonth = parseInt(prompt("How many times per month do you argue with your wife?")); //Determine and parse the number of times the user argues with there wife
var homeLate = parseInt(prompt("How many times did you stay out late this month?")); //Determine and parse the number of times the user stayed out to late
var trashRemoval = parseInt(prompt("How many time did you forget to take out the trash this month?")); //Determine and parse the number of times user forgot to take out the trash

var bouquet = ["3 Lilly's", "3 Tulips", "3 Daisy's", "3 Roses"]; //Declare and define the types and amounts of flowers in the array

var lilly = parseInt(bouquet[0]); //Parse array index 0
var tulip = parseInt(bouquet[1]); //Parse array index 1
var daisy = parseInt(bouquet[2]); //Parse array index 2
var rose = parseInt(bouquet[3]); //Parse array index 3

var flowers = lilly + tulip + daisy + rose; //Calculate and determine how many flowers are in a bouquet
var totalBouquets = fightsPerMonth + homeLate + trashRemoval; //Calculate and determine the total number of bouquets

flowers *= totalBouquets; //Calculate and determine the total number of flowers the user must buy
console.log("You will need to purchase " + flowers + " flowers for your wife this month.");

