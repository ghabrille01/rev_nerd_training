// Template Literal
// ES6
// provides a flexible and readable way to create strings in JS
// Allow you to embed expressions and multiple strings directly to string literals

const name = "Mike";
const greeting = `Hello, ${name}`;
console.log(greeting);

const multiline = `
this
is
a
multiline
string
`;
console.log(multiline);

// expression evaluation
let x = 10;
let y = 20;
const result = `x: ${x}, y: ${y},`