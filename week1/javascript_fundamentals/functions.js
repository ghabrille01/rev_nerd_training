// funciton should have 1 specif task and does it efficiently and cleanly
// not a method becuase they are functions in an object
// These are fundamental to JS, allowing you to group and encapsulate a block of code that can be executed

function greet(name) {
  return `Hello ${name}`;
}

// cannot guarante dev uses the right datatype so name the datatype to guess what to use
// Parametes of function do not have type safety
console.log(greet("mike"));

// Function Scope
// Variable declared inside a function are scoped to the function nd are not accessible from outside
// Variables declared outside a function (global scope) can be accessed withihn the function

let global_var = 340;

function scopeCheck() {
  let function_scoped = "I am only accessible within this function";
  console.log(global_var);
  console.log(function_scoped);
}

scopeCheck();

console.log(global_var);

// fails program
// console.log(function_scoped); // reference error

// Function Closures

function outer() {
    const message = "Hello, ";

    function inner(name) {
        console.log(message + name);
    }

    return inner;
}

const greetFunc = outer();
// this function is still aware of other function inside of outer
// basically applying "John" to the return inner
greetFunc("John");

// default parameters
// setting name as guest if not defined
function greetWithDefault( name = "Guest") {
    console.log(`Hello, ${name}`);
}

console.log(greetWithDefault);
console.log(greetWithDefault("John"))


// Function Hoisting
// hoisiting is a process in JS files where declared variables are brought to the top if the script and placed there within runtime
// 
// function declerations are moved to the top in the backend of the code which allows for the top console.log to be ran even with the function under it

console.log(greetWithDefault);
console.log(greetWithDefault("John"))

function greetWithDefault( name = "Guest") {
    console.log(`Hello, ${name}`);
}

console.log(greetWithDefault);
console.log(greetWithDefault("John"))