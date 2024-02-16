// Hooks
// Setups and teardown
/**
 * 
 * 
 * There are 4 hooks
 * 
 * beforeEach and afterEach
 *  - Executed before and after each test in the test suite
 * 
 * beforeAll and afterAll
 *  - Executed just once before each test suite
 * 
 */

const mathOperations = require('../math');

describe("Calculator with hooks", () => {
    let input1 = 0;
    let input2 = 0;

    beforeAll(() => {
        console.log("beforeAll Called");
    })

    afterAll(() => {
        console.log('afterAll called');
    })

    beforeEach(() => {
        console.log('beforeEach');
    })

    afterEach(() => {
        console.log('afterEach');
    })

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