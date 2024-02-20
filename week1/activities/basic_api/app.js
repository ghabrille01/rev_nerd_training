const { http } = require("http");
const PORT = 3000;

const logger = require("./logger.js");

const {
  userList,
  addItem,
  toggleBought,
  deleteItem,
  totalCost,
} = require("./shoppingListFunctions.js");

process.on("uncaughtException", (error) => {
  logger.error(`Uncaught Exception: ${error}`);
  process.exit(1);
});

const server = http.createServer((req, res) => {
  let body = "";

  req
    .on("data", (chunk) => {
      body += chunk;
    })
    .on("end", () => {
      body = body.length > 0 ? JSON.parse(body) : {};
    });

  if (req.method === "GET" && req.url === "/api/data") {
    // GET grocery list items
    try {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(userList));
      logger.info("User GET list");
    } catch (error) {
      logger.error(`An error occurred: ${error}`);
    }
  } else if (req.method === "POST" && req.url === "/api/create") {
    // POST new item on list
    try {
      //let body = "";
      //req.on("data", (chunk) => {
      //  body += chunk;
      // });

      req.on("end", () => {
        // const data = JSON.parse(body);

        // data.id = userList.length;

        // userList.push(data);

        const newItem = addItem(data.name, data.price, data.quantity);

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(newItem));
      });
      logger.info("User POST item");
    } catch (error) {
      logger.error(`An error occurred: ${error}`);
    }
  } else if (req.method === "PUT" && req.url === "/api/update") {
    // Put update item on list
    try {
      //let body = "";
      // req.on("data", (chunk) => {
      //  body += chunk;
      //});

      req.on("end", () => {
        //const data = JSON.parse(body);

        // this is where you would save data
        //userList[data.id] = data;
        const updatedItem = toggleBought(data.id);

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(updatedItem));
      });
      logger.info("User PUT item");
    } catch (error) {
      logger.error(`An error occurred: ${error}`);
    }
  } else if (req.method === "DELETE" && req.url === "/api/delete") {
    // DELETE item on list
    try {
      //let body = "";
      //req.on("data", (chunk) => {
      //  body += chunk;
      //});

      req.on("end", () => {
        //const data = JSON.parse(body);

        // delete
        //userList.splice(data.id, 1);

        deleteItem(data.id);

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(data));
        logger.info("User DELETE item");
      });
    } catch (error) {
      logger.error(`An error occurred: ${error}`);
    }
  } else {
    res.writeHead(404, { "COntent-Type": "application/json" });
    let data = { error: "Page Not Found" };
    res.end(JSON.stringify(data));
    logger.error(`An error occurred: ${data.error}`);
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
