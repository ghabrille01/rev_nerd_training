// comparison operators

let value1 = 1;
let value2 = "1";

// does not compare the datatypes and just uses its value
// loose equality
// == or !=
// use when explicitly asked for
// type coercion is employed to match the datatypes together
console.log(value1 == value2);

// compares datatypes and value
// strict equality
// === or !==
// use for default
// type coercion is not employed
console.log(value1 === value2)

// lose coercion is only applied on greater than and less than comparision
console.log(value1 <= value2)