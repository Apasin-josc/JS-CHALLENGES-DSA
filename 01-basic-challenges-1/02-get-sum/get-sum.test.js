const getSum = require('./get-sum');

test("Returning 'the sum of a + b' as a number", () => {
    //test case inputs
    const num1 = 6;
    const num2 = 7;
    
    //call the function
    const result = getSum(num1, num2);

    //check if the result is equial to the expected sum
    expect(result).toBe(13);
})