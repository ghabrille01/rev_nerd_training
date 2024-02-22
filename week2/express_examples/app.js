const express = require("express");
const { logger } = require("./util/logger");
const app = express();

const PORT = 3000;

/**
 * Middleware ar functions that an be used to process and modify http req and res
 * They are used to perform repetitive tasks like logging, authentication, data validation, and anything before the final route handler is execued
 *
 * function
 */
app.use((req, res, next) => {
  logger.info(`Incoming request: ${req}`);
  next();
});

// body parser middleware
app.use(express.json()); // lets you parse incoming JSON data from requests as a middleware function
// The middle ware function automatically parses JSON requests

app.use(express.urlencoded()); // this lets you parse URL-encoded form data from incoming requests
// data from HTML forms

// import the router
const itemRouter = require("./routes/ItemRoutes");

// this is creating a middleware
// something that is processing between the req and res
app.use("/items", itemRouter);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Express Routers is a way to organize and modularize other endpoints

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
