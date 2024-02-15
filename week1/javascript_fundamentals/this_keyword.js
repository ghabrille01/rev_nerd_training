// this keyword

/**
 * The this keyword in JS is a special identifier tht refers to the current object or context within which the code is executing
 * The value of this can change depending on how and where a function is called
 * Understanding this is crucial when working with object, functions, and constructors in JS
 */

// Global Context
// In global context, this is outside of any function or scope, this refers to the global object
// In a browser this is window, in nodeJS it is global

// Function Context
// Inside a function, the value of this can vary depending on how the function is called
// In a regular function (not an arrow function), this refers to the object that called the function
// If called directly, it refers to the global object

function greet() {
    console.log(this === window); // true in a browser
    console.log(this === global); // true in Node.js
}

// In an object method, this refers to the object that contains the methid
const person = {
    name: "",
    greet: function () {
        console.log(`Hello ${this.name}`); 
    }
}

person.name = "John";
person.greet();
