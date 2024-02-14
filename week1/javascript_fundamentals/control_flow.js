// Control Flow
// Most of the control flow statements from Java are

// if
const age = 10;
if (age >= 18) {
  console.log("You are an adult");
}

//else ifs

// Ternary Operations
// only use if really clean
// ? :
// providing a concise way to write conditional statements

const age2 = 20;
const message = age2 > 18 ? "You are an adult" : "You are not an adult";
console.log(message);

// Switch Statements
// Useful for when you need to compre a single value to multiple values

const day = "Wednesday";

switch (day) {
  case "Monday":
    console.log("Its monday");
    break;
  case "Tuesday":
    console.log("Its Tuesday");
    break;
  case "Wednesday":
    console.log("Its Wednesday");
    break;
  case "Thursday":
    console.log("Its Thursday");
    break;
  case "Friday":
    console.log("Its Friday");
    break;
}
