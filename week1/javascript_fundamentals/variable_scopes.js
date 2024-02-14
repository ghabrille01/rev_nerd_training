// In JS variable scopes refer to the context in which a variable is declared and where it can be accessed
// Variable Scope (Local or Function Scope)
// Global Scope
// The scope decides where youcan use the variable, where it is visible or accessible

// Global Scope
// Variables declared outside of any function or block have golbal scope
// global variables are accessible from anywhere in your JS code
// Be careful with global scope as thy can lead to naming conflicts

// Local (Function) Scope
// variable declared inside a function
// local variables are only accessible within the function
// they are not visible outside of the function

function exampleFunction() {
    let localVar = 20;
    console.log(localVar);
}

exampleFunction()
// console.log(localVar) // reference error

// ^^^ top two are the mostly used scopes

// Block Scopes (ES6)
// Introduced in EcmaScript 2015, block scope allos variables to be scoped to code blocks
// e.g. if statements and loops in addition to functions
// variables declared with let and const have block scope
// they are ony accessible within the block they are defined
// this was done because of var datatype not having blockSCope

function loopTest() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log(i); // data is not deleted and prints 10 which is over the loop
}

// use let instead
function loopTest() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
    // console.log(i); // returns a reference error since i is only the scope of let
}

// Lexical Scope (Closure)
// JS has lexical scope, which means that functions are able to access variables from their containing (enclosing) scope even after the outer function has finish executing
// This behvior is known as closure

function outer() {
    const message = "Hello, ";

    function inner(name) {
        console.log(message + name);
    }

    return inner;
}

const greetFunc = outer();
greetFunc("John");

