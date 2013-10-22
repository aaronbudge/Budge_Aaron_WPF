// Aaron Budge

//Functions - Basic Structures

/*function outputMsg (){ //Code block to execute when called
    console.log("Hello World"); //Print to console when function is called
}

function calcArea (){ //Code block to execute when called
    var width = 20;//Declare and define when function is called
    var height = 30; //Declare and define when function is called
    var area = width * height; //Declare and define when function is called
    console.log(area); //Print to console when function is called
}*/

//Functions - Function Execution

/*function outputMsg (){ //Code block to execute when called
    console.log("Hello World"); //Print to console when function is called
}

function calcArea (){ //Code block to execute when called
    var width = 20;//Declare and define when function is called
    var height = 30; //Declare and define when function is called
    var area = width * height; //Declare and define when function is called
    console.log(area); //Print to console when function is called
}

calcArea(); //Calling the calcArea function
calcArea(); //Calling the calcArea function
calcArea(); //Calling the calcArea function*/

//Functions - Variable Scope

/*var width = 5; //Global variable

 function outputMsg (){ //Code block to execute when called
    console.log("Hello World"); //Print to console when function is called
 }

 function calcArea (){ //Code block to execute when called
     var width = 20;//Declare and define when function is called
     var height = 30; //Declare and define when function is called
     var area = width * height; //Declare and define when function is called
     console.log(area); //Print to console when function is called
 }
calcArea(); //Calling the calcArea function
console.log(width);*/

//Functions - Parameters and Arguments

/*calcArea(30, 20);

function calcArea(w, h){ //w=30, h=20
    var area = w * h;
    console.log(area);
}

function dogYears(age){ //Parameters
    var dogYears = age * 7;
    console.log("Sparky is " + dogYears + " years old.");
}
var age1 = 4;
dogYears(age1); //Arguments
dogYears(5);*/

// Functions - Returning Values

/*var total = calcArea(30,20);

function calcArea(w, h){
    var area = w * h;
    return area; //Function is returning the info back out
}
console.log(total);*/

//Functions - Functions vs Procedures

//This is a function
/*function clacAreaF(width, height){
    var area = width * height;
    return area;
}

//This is a procedure
function clacAreaP(width, height){
    var area = width * height;
    console.log(area); //No return
}*/

// Functions - Anonymous Functions


var clacArea = function(width, height){ //Defining
//Code the function runs
    var area = width * height;
    return area;
}

var a = calcArea(20,30); //Invoking

console.log(a);



