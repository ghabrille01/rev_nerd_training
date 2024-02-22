const { getAllDBItems, postDBItem } = require("../repository/ItemDAO");
const uuid = require("uuid");

// most complex since it handles the processes and all the logic
// should be test thoroughly

async function getAllItems() {
  const items = await getAllDBItems();
  return items;
}

async function getItem(name) {
    const items = await getItemByName(name);
    return items;
  }

async function postItem(recievedData) {
  if (validateItem(recievedData)) {
    const data = await postDBItem({
      item_id: uuid.v4(),
      name: jsonData.name,
      price: jsonData.price,
    });
    return data;
  }
  return null;
}

function validateItem(jsonData) {
  if (!jsonData.name || !jsonData.price) {
    return false;
  }
  return true;
}

module.exports = {
  getAllItems,
  postItem,
  getItem
};
