const http = require("http");
const {
  addItem,
  togglePurchased,
  removeItem,
  calculateTotalCost,
  getItem,
} = require("./src/shoppingListFunctions");
const port = 3000;

const server = http.createServer((req, res) => {
  let body = "";

  req
    .on("data", (chunk) => {
      body += chunk;
    })
    .on("end", () => {
      body = body.length > 0 ? JSON.parse(body) : {};

      const contentType = { "Content-Type": "application/json" };

      if (req.url.startsWith("/items")) {
        let index = req.url.split("/")[2];//parseInt(req.url.split("/")[2]);

        switch (req.method) {
          case "POST":
            // console.log("POST REQUEST");
            const { name, price } = body;
            if (!name || !price) {
              res.writeHead(400, contentType);
              res.end(
                JSON.stringify({
                  message: "Please provide valid names or prices",
                })
              );
            } else {
              addItem(name, price).then((message) => {
                res.writeHead(201, contentType);
                res.end(JSON.stringify({ message: message }));
              });
            }
            break;
          case "PUT":
            const putMessage = togglePurchased(index);
            res.writeHead(200, contentType);
            res.end(JSON.stringify({ putMessage }));
            break;
          case "DELETE":
            const deleteMessage = removeItem(index);
            res.writeHead(200, contentType);
            res.end(JSON.stringify({ deleteMessage }));
            break;
          case "GET":
            const { item_id } = body;
            getItem(item_id).then((item) => {
              res.writeHead(200, contentType);
              res.end(JSON.stringify(item));
            });

            break;
          default:
            res.writeHead(404, contentType);
            res.end(JSON.stringify({ message: "Invalid Endpoint" }));
            break;
        }
      } else {
        res.writeHead(404, contentType);
        res.end(JSON.stringify({ message: "Invalid Endpoint" }));
      }
    });
});

server.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
