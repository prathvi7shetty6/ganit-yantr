const add = (num1, num2) => {
    testValidityOfInputs(num1, num2)
    return (num1 + num2)
}

const subtract = (num1, num2) => {
    testValidityOfInputs(num1, num2)
    return (num1 - num2)
}

const multiply = (num1, num2) => {
    testValidityOfInputs(num1, num2)
    return (num1 * num2)
}

const divide = (num1, num2) => {
    testValidityOfInputs(num1, num2)
    if(num2 === 0) {
        throw new Error("Division by 0 is not possible");
    }
    return (num1 / num2)
}

const testValidityOfInputs = (num1, num2) => {
    if(isNaN(num1) || isNaN(num2)) {
        throw new Error("The input provided are not numbers");
    }
}

module.exports = {
    add, subtract, multiply, divide
}