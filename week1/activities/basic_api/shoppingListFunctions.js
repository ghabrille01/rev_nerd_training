const userList = [];

function addItem(name, price, quantity) {
  userList.push({
    id: userList.length,
    name: name,
    price: price,
    quantity: quantity,
    bought: false,
  });
  
  return userList[userList.length-1];
}

function toggleBought(index) {
  userList[index].bought = true;

  return userList[index];
}

function deleteItem(index) {
  userList.splice(index, 1);
}

function totalCost() {
    let total = 0;
    return userList.reduce((item) => total += item.price)
}

module.exports = {
  userList,
  addItem,
  toggleBought,
  deleteItem,
  totalCost
};
