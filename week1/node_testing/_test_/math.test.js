const mathOperations = require("../math");

/**
    
    Describe
    The describe block is an outer description for the test suite

    Individual Tests
    These test blocks represent a single test, the string in quotes is the description of the test

    Expect Block
    Expect

 */




describe("Calculator Tests", () => {
  // Version 1 - Basic
  test("Adding 1 + 2 should return 3", () => {
    expect(mathOperations.sum(1, 2)).toBe(3);
  });
});

// Version 2 - Cleaner
describe("Cleaner Calulator Test", () => {
    test('Adding 4 + 5 should return 9', () => {
        // Arrange and act
        let result = 0;
        let a = 4;
        let b = 5;
        let expectedAnswer = 9;

        // Act
        result = mathOperations.sum(a,b);

        // Assert
        expect(result).toBe(expectedAnswer);
    })
})

// More examples
describe("Real Calculatore Test", () => {

    test('Adding 1 + 2 should return 3', () => {
        // Arrange and Act
        let result = mathOperations.sum(1,2);

        // Assert
        expect(result).toBe(3);
    })
    test('Subtracting 2 - 10 should return 8', () => {
        // Arrange and Act
        let result = mathOperations.diff(10,2);

        // Assert
        expect(result).toBe(8);
    })
    test('Adding 2 * 8 should return 16', () => {
        // Arrange and act
        let result = mathOperations.mult(2,8);

        // Assert
        expect(result).toBe(16);
    })
})


// Jest Matchers
// These are how we improve our expect or assertion

// equality
test('Equality matchers', () => {
    expect(2*2).toBe(4);
    expect(4-2).not.toBe(1);
})

// Truthiness
test("Truthy Operatiors", () => {

})