const {
  shoppingList,
  addItem,
  togglePurchased,
  removeItem,
  calculateTotalCost,
} = require("../shoppingListFunctions");

describe("ShoppingListFunctions Tests", () => {
  // Test addItem
  test("Successfully add new item", () => {
    // Arrange
    const name = "Test item";
    const price = 3.99;
    const expected = `${name} has been added to the shopping list!`;

    // Act
    const result = addItem(name, price);

    // Assert
    expect(result).toBe(expected);
  });

  // Test togglePurchased
  test("Successfully toggle purchased", () => {
    // Arrange
    const name = "Test item";
    const index = 0;
    const expected = `Toggle purchase status of ${name}`;

    // Act
    const result = togglePurchased(index);

    // Assert
    expect(result).toBe(expected);
  });

  // Test removeItem
  test("Successfully removed item", () => {
    // Arrange
    const name = "Test item";
    const index = 0;
    const expected = `${name} has been removed`;

    // Act
    const result = removeItem(index);

    // Assert
    expect(result).toBe(expected);
  });

  // Test calculateTotalCost
  test("Successfully calculate total cost", () => {
    // Arrange
    const name = "Test item";
    const price1 = 2.99;
    const price2 = 4.99;
    const price3 = 16.99;
    const expected = price1 + price2 + price3;

    // Act
    addItem(name, price1);
    addItem(name, price2);
    addItem(name, price3);

    togglePurchased(0);
    togglePurchased(1);
    togglePurchased(2);

    const result = calculateTotalCost();

    // Assert
    expect(result).toBe(expected);
  });
});
