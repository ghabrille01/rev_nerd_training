// endpoint: /shoppinglist

const express = require("express");
const router = express.Router();

const shoppingListService = require("../service/ShoppingListService");

// reading
router.get("/", async (req, res) => {
  const nameQuery = req.query.name;
  if (nameQuery) {
    const item = await shoppingListService.getItemByName(nameQuery);
    res.status(201).json({ message: `Got item by name ${nameQuery}`, item });
  }
  const items = await shoppingListService.getAllItems();
  res.status(201).json({ message: "Got all items", items });
});

// create
router.post("/", async (req, res) => {
  const data = await shoppingListService.postItem(req.body);
  if (data) {
    res.status(201).json({ message: "Added to list item", data });
  } else {
    res
      .status(400)
      .json({ message: "Was not created", receivedData: req.body });
  }
});

// update
router.put("/", async (req, res) => {
  const nameQuery = req.query.item_id;
  if (nameQuery) {
    const data = await shoppingListService.togglePurchased(nameQuery);
    if (data) {
      res.status(201).json({ message: "Toggled item to purchased", data });
    } else {
      res
        .status(400)
        .json({
          message: "Purchased was not toggled",
          receivedData: nameQuery,
        });
    }
  }
});

// delete
router.delete("/", async (req, res) => {
    const nameQuery = req.query.item_id;
    if (nameQuery) {
      const data = await shoppingListService.deleteItem(nameQuery);
      if (data) {
        res.status(201).json({ message: "Item is deleted", data });
      } else {
        res
          .status(400)
          .json({
            message: "Cannot delete item",
            receivedData: nameQuery,
          });
      }
    }
  });

module.exports = router;
