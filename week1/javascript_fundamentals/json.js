// JSON (JavaScript Object Notation)
// is a lightweight data interchange format
// That is boh human readable and machine parseable
// JSON is often used to transmit data between a server and a web application

/**
 *  name requires ""
 *  strings requires ""
 * {
 *      "name": "John Doe",
 * "age": 40,
 * 
 * }
 */


// JavaScript Method for JSON
// JSON.stringify(obj) converts an JS object to a JSON string
// JSON.parse(jsonObject) parse a JSON string an converts it to a JS object

const date = {
    name: "Alice",
    age: 25
}

const jsonString = JSON.stringify(data);
console.log(jsonString);

const parseData = JSON.parse(jsonString);
console.log(parseData);

// Use Cases:
/**
 * Web APIs often return JSON data
 */