const { Console } = require("console");
const fs = require("fs");

// Sync fixes the race conditions

// Reading to a file
fs.readFile("example.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

// Writing to a file
// change Hello, World in example.txt to content bellow
let content = "Hello, from Node.js\n";

fs.writeFileSync("example.txt", content, "utf-8");
console.log("File has been written\n");

// Appending to a file
let append = "Appending, from Node.js\n";

fs.appendFileSync("example.txt", append, "utf-8");
console.log("File has been appended\n");

// Check if the file or directory exists before

if (fs.existsSync("example.txt")) {
  console.log("file exists\n");
} else {
  console.log("file does not exist\n");
}

// creating and removing directories

// creating a directory
fs.mkdirSync("myDirectory");
console.log("directory created\n");

// deleteing directory
if (fs.existsSync("./myDirectory/.")) {
    console.log("myDirectory exists\n");

    fs.rmdirSync("myDirectory");
console.log("directory deleted\n");
} else {
    console.log("myDirectory does not exists\n");

}
