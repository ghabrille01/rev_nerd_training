function calculateTotal(carItems) {
  const totalPrice = carItems.reduce((total, item) => (total = item.price), 0);
  return totalPrice;
}



module.exports = { calculateTotal };
