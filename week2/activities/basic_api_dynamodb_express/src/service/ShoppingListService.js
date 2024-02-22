const shoppingListDAO = require("../repository/ShoppingListDAO");
const uuid = require("uuid");

async function getAllItems() {
  const items = await shoppingListDAO.getAllItems();
  return items;
}

async function getItemByName(itemName) {
  const item = await shoppingListDAO.getItemByName(itemName);
  return item;
}

async function postItem(receivedData) {
  if (validateItem(receivedData)) {
    const data = await shoppingListDAO.postListItem({
      item_id: uuid.v4(),
      name: receivedData.name,
      price: receivedData.price,
      purchased: false,
    });
    return data;
  }
  return null;
}

async function togglePurchased(itemId) {
  if (itemId) {
    const item = await shoppingListDAO.togglePurchased(itemId);
    return item;
  }
  return null;
}

async function deleteItem(itemId) {
    if (itemId) {
      const item = await shoppingListDAO.deleteItem(itemId);
      return item;
    }
    return null;
  }

function validateItem(data) {
  if (!data.name || !data.price) {
    return false;
  }
  return true;
}


module.exports = {
  getAllItems,
  postItem,
  getItemByName,
  togglePurchased,
  deleteItem
};
