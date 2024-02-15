const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  // need to check method and request comming in to this server
  // GET SPECIFIC ENDPOINT
  if (req.method === "GET" && req.url === "/api/data") {
    res.writeHead(200, { "Content-Type": "application/json" });
    let data = { message: "This is GET data" };
    res.end(JSON.stringify(data));
  } else if (req.method === "POST" && req.url === "/api/create") {
    // POST ENDPOINT
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const data = JSON.parse(body);

      // this is where you would save data

      console.log(data);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    });
  } else if (req.method === "PUT" && req.url === "/api/update") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const data = JSON.parse(body);

      // this is where you would update data

      console.log(data);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(data));
    });
  } else if (req.method === "DELETE" && req.url === "/api/delete") {
    // DELETE ENDPOINT
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404, { "COntent-Type": "application/json" });
    let data = { error: "Not Found" };
    res.end(JSON.stringify(data));
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening on http:localhost:${PORT}`);
});
