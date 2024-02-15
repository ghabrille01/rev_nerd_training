const http = require("http");
const PORT = 3000;

const { createLogger, transports, format } = require("winston");

// create logger instance
const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level}]: ${message}`;
    })
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "app.log" }),
  ],
});

const errorLogger = createLogger({
  level: "error",
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level}]: ${message}`;
    })
  ),
  transports: [
    new transports.Console(), // log to the console
    new transports.File({ filename: "app.log" }), // log to a file
  ],
});

process.on("uncaughtException", (error) => {
  errorLogger.error(`Uncaught Exception: ${error}`);
  process.exit(1);
});

// storage
const userList = [];

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/api/data") {
    // GET grocery list items
    try {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(userList));
      logger.info("User GET list");
    } catch (error) {
      errorLogger.error(`An error occurred: ${error}`);
    }
  } else if (req.method === "POST" && req.url === "/api/create") {
    // POST new item on list
    try {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });

      req.on("end", () => {
        const data = JSON.parse(body);

        data.id = userList.length;

        userList.push(data);

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(data));
      });
      logger.info("User POST item");
    } catch (error) {
      errorLogger.error(`An error occurred: ${error}`);
    }
  } else if (req.method === "PUT" && req.url === "/api/update") {
    // Put update item on list
    try {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });

      req.on("end", () => {
        const data = JSON.parse(body);

        // this is where you would save data
        userList[data.id] = data;

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(data));
      });
      logger.info("User PUT item");
    } catch (error) {
      errorLogger.error(`An error occurred: ${error}`);
    }
  } else if (req.method === "DELETE" && req.url === "/api/delete") {
    // DELETE item on list
    try {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });

      req.on("end", () => {
        const data = JSON.parse(body);

        // delete
        userList.splice(data.id, 1);

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify(data));
        logger.info("User DELETE item");
      });
    } catch (error) {
      errorLogger.error(`An error occurred: ${error}`);
    }
  } else {
    res.writeHead(404, { "COntent-Type": "application/json" });
    let data = { error: "Page Not Found" };
    res.end(JSON.stringify(data));
    errorLogger.error(`An error occurred: ${data.error}`);
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening on http:localhost:${PORT}`);
});
