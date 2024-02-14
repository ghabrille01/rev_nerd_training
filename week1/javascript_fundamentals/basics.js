// Datatypes
// Primitives
// Integers and floats are both NUMBER

let age = 30;
let price = 19.99;

// String
let name = "Jhon";
let message = "Hellow, World!";

// booleans
// follows naming convesntion is...

let isStudent = true;
let isEmpty = false;


// Undefined
// Represents a variables that has bee devlared but not assigned a values
let undefinedVariable;
console.log(undefinedVariable);

// null
// Represents the intentional absence of any object value or no value at all
// checking something against null will crash
let emptyValue = null;

// Symbol
// not used by the trainer
// Introduced at ES6 (Ecma Script)
// Represents unique and imutable values, used often as object property keys
// need to know whats a symbol because of QC test
const uniqueKey = Symbol("decription");
const uniqueKey2 = Symbol("description");

// BigInt
// niche
// reprensents arbritralily large numbes
// ES11
const bigNumber = 12345623456780987654567876543n;

// Refrence Types
// Objects
// represents a collection of key-value paurs

const person = {
  firstName: "Mike",
  lastName: "Doe",
};

// Arrays
// arrays can have any data type
const number = [1, 2, 3, 4, 5];
const mix = [1, "2", { number: 3 }, `4`];

// arrays have function to avoid creating holes in the array
const sliced = number.slice(2, 4);

// functions
// treated as a first class citizen
function greet(name) {
  // using a template literal to change my string
  // follows white spaces in the literal
  return `
    Hello 
    ${name}
    `;
}

console.log(greet("mike"));



