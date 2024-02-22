const express = require("express");
const router = express.Router();

router.use();

// localhost:3000/items
router.get("/", (req, res) => {
  res.send("This is the root items route");
});

router.get("/region", (res, req) => {
  res.send("This is an additional endpoint");
});

router.post("/", validateItemMiddleware, (req, res) => {
  const jsonData = req.body;
  console.log(jsonData);
  res.status(201).json({ message: `message recieved: ${jsonData}` });
});

function validateItemMiddleware(req, res, next) {
  // check if there is a valid name and price
  // abstarcts out the acutal function to make it easier to test instead of needing to mock the server
  let jsonBody = req.body;
  if (validateItem(jsonBody)) {
    next();
  } else {
    res.status(400).json({
      message: `Invalid Name or Price: ${jsonBody.name} $${jsonBody.price}`,
    });
  }
  /*
  if (!jsonBody.name || !jsonBody.price) {
    res
      .status(400)
      .json({
        message: `Invalid Name or Price: ${jsonBody.name} $${jsonBody.price}`,
      });
  } else {
    next();
  }*/
}

function validateItem(data) {
  if (!data.name || !data.price) {
    return false;
  } else {
    return true;
  }
}

module.exports = router;
