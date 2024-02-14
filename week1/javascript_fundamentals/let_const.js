// Let and Const
// The let and const keywords are used for variable declaration
// Introduced in ES6 for better variable scoping and management compared to the var keyword
// make sure to know when things are introduce 

// let 
// is used to declare variables within block scope
// they are only accessible within the block or function they are defined
// You can reassign values to variables declared with let

let x = 10; // declare and assign a variable

if (true) {
    let x = 20;
    console.log(x);
}

console.log(x);

// const
// is used to declare block scope as well
// however, variables declared with const cannot be reassigned after they are initialized, they ar constants

const PI = 3.14159 // decleration and initialization of a constant variable
// PI = 3.14; 

// Var has variable hoisting but only takes the type and not the value

// hoisting example

// var firstName = "mike"; // console log does know mike since it is declared and initialized above it

console.log(firstName);

// let firstName = "Mike"; // throws referenced error since console doesnt know first name
var firstName = "mike"; // return undefined since the declerations of firstname is the only thing remembered