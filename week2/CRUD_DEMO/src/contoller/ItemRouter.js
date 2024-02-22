// enpoint: /items
// CRUD
const express = require("express");
const router = express.Router();

const { getAllItems, getItem } = require("../service/ItemService");
const { postItem } = require("../repository/ItemDAO");

// reading
router.get("/", async (req, res) => {
  const namedQuery = req.query.name;
  if (namedQuery) {
    const item = await getItem(namedQuery);
    res.status(200).json({ message: `Got item by name ${namedQuery}` });
  }
  const items = await getAllItems();
  res.status(200).json({ message: "Got all items", items });
});

// create
router.get("/", async (req, res) => {
  const items = await postItem();
  res.status(200).json({ message: "Post new item", items });
});

module.exports = router;
