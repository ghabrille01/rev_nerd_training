// Import the readline module for handling user input in the console
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin, // Read from standard input (keyboard)
  output: process.stdout, // Write to standard output (console)
});

let userList = [];

async function App() {
  rl.question(
    "\nWhat do you want to do?\n1. View Grocery List\n2. Add to Grocery List\n3. Mark item as bought\n4. Delete from Grocery List\n5. exit\n",
    async (answer) => {
      switch (answer) {
        case "1":
          viewList(userList);
          App();
          break;
        case "2":
          const item = {
            name: "",
            quantity: 0,
            price: 0.0,
            bought: false,
          };

          await rl.question("What is the name of the item? ", async (name) => {
            item.name = name;

            await rl.question("How many do you need? ", async (quantity) => {
              item.quantity = parseInt(quantity, 10);

              await rl.question("How much does one cost? ", async (price) => {
                item.price = parseFloat(price);
                userList.push(item);
                App();
              });
            });
          });
          break;
        case "3":
          viewList(userList);
          await rl.question(
            "\nWhich item do you want to mark as done?\n",
            async (input) => {
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
        case "4":
          viewList(userList);
          await rl.question(
            "\nWhich item do you want to delete?\n",
            async (input) => {
              try {
                let userInput = parseInt(input, 10);
                if (userInput < 1 || userInput > userList.length) {
                  console.log("\nItem doesnt exist\n");
                }
                console.log(
                  `\nItem deleted: ${userList[userInput - 1].name}\n`
                );
                userList.splice(userInput - 1, 1);

                App();
              } catch {
                console.log("\nInvalid input\n");
                App();
              }
            }
          );
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
  console.log("\nGrocery List:\n");
  if (list.length === 0) {
    return console.log("\nList is empty.\n");
  }
  for (let i = 0; i < list.length; i++) {
    console.log(`Item #${i + 1}
        name: ${list[i].name}
        quantity: ${list[i].quantity}
        price: $${list[i].price}
        bought: ${list[i].bought}`);
  }
}

App();
