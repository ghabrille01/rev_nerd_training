const express = require("express");
const { logger } = require("./util/logger");
const app = express();

const PORT = 3000;

// routes
const shoppingListRouter = require("./controller/ShoppingListRouter");

app.use(express.json());

app.use((req, res, next) => {
  logger.info(`Incoming ${req.method} : ${req.url}`);
  next();
});

app.use("/shoppinglist", shoppingListRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
