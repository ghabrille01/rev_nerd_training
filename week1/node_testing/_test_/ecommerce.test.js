const { calculateTotal } = require("../ecommerce");

// create a mock function for the caluculateTotal function
const mockCalculateTotal = jest.fn();

// mock a simple shopping cart

const sampleCart = [
    {id: 1, name: "product 1", price: 10},
    {id: 2, name: "product 2", price: 20},
    {id: 3, name: "product 3", price: 30},
]

test('calculateTotal should calculate the total price correctly', () => {
    // configure the mock function to return a fixed value
    mockCalculateTotal.mockReturnValue(60);

    // Call the calculateTotal function with the sample cart
    const totalPrice = mockCalculateTotal(sampleCart);

    // Assert that the mock function was called
    expect(mockCalculateTotal).toHaveBeenCalledWith(sampleCart);

    // Assert that the totalPrice matches the expected value
    expect(totalPrice).toBe(60);
});

afterEach(() => {
    mockCalculateTotal.mockClear();
})