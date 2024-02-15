// Arrow Functions
// Introduced ES6
// they are a concise way of writing anonymous functions
// They provide shorted syntax compared to tradditional function expressions
// Especially for one line code

// Basic Syntax
/**
 * normal function
 * 
 * function nameOfFunction(parameterList){
 *      function Body
 *      return statement
 * }
 * 
 * const functionName = function () {
 *      return thing;
 * }
 * 
 * const functionName = (parameters) => {
 *      function body
 * }
 * 
 * If you want to return something in an arrow function, it depends on honay lines you have
 * If you have more than one line of code then you will need to use {} Aand the return statement
 * 
 * If you have one line of code, it is implied to retunr and you do not need to use {}
 * This is know as  implicit return
 */

// if there is only one parameter, you can omit the parenthesis
const square = x => x * x;

// If there are no parameters, you need to use and empty parentesis
const sayHello = () => {
    console.log("Hello");
}

// No this binding
/**
 * 
 */











