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


// For, while, do-while loops

// for loops
// initialization, condition, iteration
// flexible on how to iterate through
for( let i = 0; i < 5; i++ ) {
    console.log(i);
}

// while loop
// repeat a loop for as long as a condition evaluates to true
// while(condition){... code to be executed}

// do while loop
// do while loops will always do the code once, even if the condition is flase, unlike while loop

// loop control statements
// break and continue
// break terminates the loop prematurely and is usually based on a some condition
// continue will skip the rest of the current iteration and continue with the next one

for (let i = 0; i < 5; i++) {
    if (i==2){
        continue;
    }
    console.log(i);
}
