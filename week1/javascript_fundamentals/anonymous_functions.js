// Anonymous Functions
// in JS a anonymous function is a function that does not have a nmae
// Instead of defining a name with the function keyword, we define it as an expression

// These are often used as arguements to other functions or to create immediately invoked function expression (IIFE)

// Function Expression

const add = function (a, b) {
  return a + b;
};

const result = add(3,4); // 7
console.log(result);

// Callback function
// these are functions passed to other higher order functions like forEach, map, filter, and event handlers

const number  = [1,2,3,4,5]

number.forEach(function (number){
    console.log(number);
});

// IIFE (mmediately Invoked Function Expression)
// This is often used to create a private scope for variables to avoid polluting the global scope
//function can only be accessed insid the parenthesis
(function(){
    const message = "This is an IIFE";
    console.log(message);
})();

// Passing functions are arguements

function processNumbers(numbers, callback){
    const result = callback(numbers);
    console.log(`Result: ${result}`);
}

const sum = (numbers) => numbers.reduce((acc,num)=> acc+num)