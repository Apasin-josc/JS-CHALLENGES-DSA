const calculator = require('./calculator');

test("returning 'the value of the calculator', as a integer", () => {
    const a = 10;
    const b = 3;

    //addition
    expect(calculator(a, b, '+')).toBe(13);

    //substraction
    expect(calculator(a, b, '-')).toBe(7);
    
    //multiplication
    expect(calculator(a, b, '*')).toBe(30);

    //division
    expect(calculator(a, b, '/')).toBe(3.3333333333333335);
    
})