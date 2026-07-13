// Question:
// Implement a Calculator class using method chaining
// with add, subtract, multiply, divide, power, getResult

class Calculator {
    
    // initialize result
    constructor(value) {
        this.result = value; // store initial value
    }
    
    // add value
    add(value) {
        this.result += value;
        return this; // enable chaining
    }
    
    // subtract value
    subtract(value){
        this.result -= value;
        return this;
    }
    
    // multiply value
    multiply(value) {
        this.result *= value;
        return this;
    }
    
    // divide value
    divide(value) {
        if (value === 0) {
            throw new Error("Cannot divide by zero"); // error handling
        }
        this.result /= value;
        return this;
    }
    
    // power operation
    power(value) {
        this.result = Math.pow(this.result, value);
        return this;
    }
    
    // return final result
    getResult() {
        return this.result;
    }
}
