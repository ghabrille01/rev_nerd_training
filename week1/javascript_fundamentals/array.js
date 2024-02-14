// Arrays
// basic data structure in JS, used to store and manipulate collections of values
// Arrays can hold values of various data types
// JS arrays are ordered, indexed, and  can grow or shrink in size dynamically

// creating an array
const fruits = ["apple", "banana", "orange"];

// accessing array elements
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// modifying elements
fruits[2] = "grape";

console.log(fruits);

// Method of the array
// there are numerous built in methods

fruits.push("pear"); // adds "pear" to the end of the array
console.log(fruits);
fruits.pop(); // removes the last element of the array
console.log(fruits);

// these function are the same
// this first one is arrow notation
fruits.forEach((fruit) => console.log(fruit));
fruits.forEach(function (fruit) {return console.log(fruit);});

// Array destuturing
// ES6
// allows you to extract values from arrays into individul varialbes

const [first, second, thing] = fruits;
console.log(first);
console.log(second);
console.log(thing)