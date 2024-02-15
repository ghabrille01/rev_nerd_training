// Common JS Import and Export
// pulling the whole file as a variable
// const commonjsImports = require('./commonjs');

// Only pulls these from the file
//const {printName, person} = require('./commonjs');

//commonjsImports.printName();
//console.log(commonjsImports.person);

//console.log("I am running a node project!");

//import module_example from "./modules.js";

module_example.printRole();

import { printRole as role } from "./modules.js";

role();

console.log(module_example.person);