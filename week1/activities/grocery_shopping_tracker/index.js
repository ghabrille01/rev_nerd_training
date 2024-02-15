// Import the readline module for handling user input in the console
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin, // Read from standard input (keyboard)
  output: process.stdout, // Write to standard output (console)
});

const userList = [];

function App() {
  viewList(userList);
  rl.question(
    "\nWhat do you want to do?\n1. Add to Grocery List\n2. Mark item as bought\n3. Delete from Grocery List\n4. Calculate Total Cost\n5. exit\n",
    (answer) => {
      switch (answer) {
        case "1":
          const newItem = addItem();
          break;
        case "2":
          viewList(userList);
          rl.question(
            "\nWhich item do you want to mark as done?\n",
            (input) => {
              try {
                let userInput = parseInt(input, 10);
                if (userInput < 1 || userInput > userList.length) {
                  console.log("\nItem doesnt exist\n");
                }
                userList[userInput - 1].bought = true;

                App();
              } catch {
                console.log("\nInvalid input\n");
                App();
              }
            }
          );
          break;
        case "3":
          viewList(userList);
          rl.question("\nWhich item do you want to delete?\n", (input) => {
            try {
              let userInput = parseInt(input, 10);
              if (userInput < 1 || userInput > userList.length) {
                console.log("\nItem doesnt exist\n");
              }
              console.log(`\nItem deleted: ${userList[userInput - 1].name}\n`);
              userList.splice(userInput - 1, 1);

              App();
            } catch {
              console.log("\nInvalid input\n");
              App();
            }
          });
          break;
        case "4":
          calculateTotalCost();
          break;
        case "5":
          rl.close();
          break;
        default:
          console.log("\nInvalid Input\n");
          App();
          break;
      }
    }
  );
}

function viewList(list) {
  console.log("\nGrocery List:");
  if (list.length === 0) {
    return console.log("\nList is empty.\n");
  }
  list.forEach((item, index) => {
    console.log(`
        Item #${index + 1}
        name: ${item.name}
        quantity: ${item.quantity}
        price: $${item.price.toFixed(2)}
        bought: ${item.bought}`);
  });
}

function addItem() {
  const item = {
    name: "",
    quantity: 0,
    price: 0.0,
    bought: false,
  };

  rl.question("What is the name of the item? ", (name) => {
    item.name = name;

    rl.question("How many do you need? ", (quantity) => {
      item.quantity = parseInt(quantity, 10);

      rl.question("How much does one cost? ", (price) => {
        item.price = parseFloat(price);
        userList.push(item);
        App();
      });
    });
  });
}

// not working
function calculateTotalCost() {
  const totalCost = userList.reduce(
    (sum, item) => sum + (item.bought ? parseFloat(item.price) : 0),
    0
  );
  console.log(`Total Cost: $${totalCost}`);
  App();
}

App();
