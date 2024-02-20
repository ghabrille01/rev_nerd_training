const { logger } = require("./util/logger");

const {
  addListItem,
  getListItem,
  updateItemPurchased,
  deleteItem
} = require("./dao/ShoppingListDAO");
const uuid = require("uuid");

const shoppingList = [];

async function getItem(id) {
  let data = await getListItem(id);
  console.log(data);
  return data;
}

async function addItem(name, price) {
  const newItem = {
    item_id: uuid.v4(),
    name,
    price: parseFloat(price).toFixed(2),
    purchased: false,
  };

  try {
    addListItem(newItem);
    logger.info(`Added item: ${newItem.name}`);
    return `${name} has been added to the shopping list!`;
  } catch (err) {
    console.log(err);
  }
}

async function togglePurchased(id) {
  /*if (index >= 0 && index < shoppingList.length) {
    //shoppingList[index].purchased = !shoppingList[index].purchased;
    updateItemPurchased(id);
    logger.info(
      `Toggle Purchased: ${shoppingList[index].name}: ${shoppingList[index].purchased}`
    );
    return `Toggle purchase status of ${shoppingList[index].name}`;
  } else {
    logger.error(`Failed toggled purchase: Index - ${index}`);
    return "Invalid Item Index";
  }*/
  const result = await updateItemPurchased(id);
  logger.info(`Toggle Purchased: ${id}: true`);
  return result;
}

async function removeItem(id) {
  /*if (index >= 0 && index < shoppingList.length) {
    const removedItem = shoppingList.splice(index, 1);
    logger.info(`Removed Item: ${removedItem[0].name}`);
    return `${removedItem[0].name} has been removed`;
  } else {
    logger.error(`Failed remove item: Index - ${index}`);
    return "Invalid Item Index";
  }*/

  const result = await deleteItem(id);
  logger.info(`Removed Item: ${id}`);
  return result;
}

function calculateTotalCost() {
  const totalCost = shoppingList.reduce(
    (sum, item) => sum + (item.purchased ? parseFloat(item.price) : 0),
    0
  );
  logger.info(`Calculating total cost: Total Cost $${totalCost}`);
  return totalCost;
}

module.exports = {
  getItem,
  addItem,
  togglePurchased,
  removeItem,
  calculateTotalCost,
};
