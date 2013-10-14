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
