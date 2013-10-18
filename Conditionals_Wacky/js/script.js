// Aaron Budge
// October 17, 2013
// Conditionals_Wacky

//Getting Lucky

//If I take my spouse on a date tonight, what are my chances of getting lucky?
var dateType = prompt("What will you do on your date? \n a: Dinner \n b: Dinner and a Romantic Movie \n c: Dinner, Drinks, and a Romantic Movie"); //Declare and define variable, and initiate user prompt to determine date type
var kids = prompt("How many kids under the age of 8 do you have?"); //Declare and define variable, and initiate user prompt to determine how many kids the user has

if(kids >= 5){ //Test condition
    console.log("Why are you asking? With that many kids, you're obviously getting some!");//Print out result to console log if condition is true
}
if(dateType === "a" && kids < 5){//Test condition
    var odds = 65 / kids;  //Declare and define variable if condition is true
    console.log("You have a \%" + parseInt(odds) + " chance of getting lucky tonight!"); //Print out to console log if condition is true
}else if(dateType === "b" && kids < 5){//Test condition
    var odds = 85 / kids; //Declare and define variable if condition is true
    console.log("You have a \%" + parseInt(odds) + " chance of getting lucky tonight!");//Print out to console log if condition is true
}else if(dateType === "c" && kids < 5){ //Condition to test
    var drinks = prompt("How many drinks will your spouse have?"); //Variable to declare and define if previous conditions are false.
    if(drinks >= 4 && kids < 5){ //Conditions to test
        console.log("Forget the movie and head home, you're getting lucky tonight!"); //Result to print out to console log if conditions are true.
    }else if(kids > 1 && drinks <= 3){ //Conditions to test.
        var odds = 50 / kids * drinks; //Variable to declare and define if conditions are true.
        console.log("You have a \%" + parseInt(odds) + " chance of getting lucky tonight!"); //Result to print out if conditions are true.
    }else if(kids <= 1 && drinks <= 3){
        var odds = 33 / kids * drinks;
        console.log("You have a \%" + parseInt(odds) + " chance of getting lucky tonight!");
    }
}
