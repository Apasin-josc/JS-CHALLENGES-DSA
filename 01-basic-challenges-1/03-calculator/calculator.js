function calculator(a, b, char){
    switch(char){
        case '+':
            return a + b;
            break;
        case '-':
            return a- b;
            break;
        case '*':
            return a * b;
            break;
        case '/':
            return a / b;
            break;
        default:
            console.log(`insert a operator symbol`);
    }
}

module.exports = calculator;