// Aaron Budge
// October 14, 2013
// Screencast: Conditionals


//Conditional Logic

var oldEnough = false;

//if the child is old enough, print to the console "you can ride!"
if(oldEnough){
    //code performed if condition is true
    console.log("You can ride the coaster!");
}


//Relational Expressions

var kidHeight = 40;
var minHeight = 48;

//if the kid is over 48 inches in height
if(kidHeight > minHeight){
    //code performed if condition is true
    console.log("You can ride the coaster!");
}


//Condition with Expressions

var kidHeight = 47;
var minHeight = 48;
var sneakerLift = 2;

//if the kid is over 48 inches in height
if(kidHeight + sneakerLift > minHeight){
    //code performed if condition is true
    console.log("You can ride the coaster!");
}


// if and else

var kidHeight = 52;
var minHeight = 48;

//if the kid is over 48 inches in height
if(kidHeight > minHeight){
    //code performed if condition is true
    console.log("You can ride the coaster!");
}else{
    console.log("Sorry kid, you've got some growing to do first!");
}

// else if

var kidHeight = 52;
var minHeight = 48;
var wParentHeight = 45; //The height of the kid with parent

//if the kid is over 48 inches in height
if(kidHeight > minHeight){
    //You can ride
    console.log("You can ride the coaster!");
}else if(kidHeight > wParentHeight){
    //You can ride with a parent present
    console.log("You can ride, but only with a parent present!");
}else{
    //Sorry you have growing to do
    console.log("Sorry kid, you've got some growing to do first!");
}


// Logical Operators

var budget = 100;
var iPhonePrice = 199.99;
var wonLottery = true;

//If the price of the phone is less than our budget And if our paycheck is over 300.00
if(iPhonePrice < budget || wonLottery){
    console.log("We can buy the phone!");
}else {
    console.log("No phone for you!!");
}

//Ternary Operators

var gpa = 48;

//If the gpa is over the min 2.0 score, the student can graduate
if(gpa > 2.0){
    console/log("You can graduate!");
}else{
    console.log("GPA is to low!");
}



