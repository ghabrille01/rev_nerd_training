// Type Coeercion
// Refers to the automatic conversion of one data type to another when performing operations or comparisons that involve different data types.
// Because JS is a loosely type language, this means it doesn't require explicit data types being declared with a variable
// It will instead atttempt to convert the values as needed
// this can lead to unintended behaviors if not understood correctly

// implicit coercion (auto-conversion)
const num = 5;
const str = "10";
const result = num + str; // the number is coerced to a string, and xoncatenation occurs

console.log(result); // output is 510 as a string

//Comparison with loose equality (==)
let x = 10;
let y = "10";
console.log(x==y);

// Explicit Type Conversion
// You can do this expliitly in the function
// Number(), String(), an Boolean()
console.log(x===y);
console.log(x===Number(y));

