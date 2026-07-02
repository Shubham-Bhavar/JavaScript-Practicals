// Question:
// Find the sum of digits of a number

let num = 1234;
let sum = 0;

// loop until number becomes 0
while (num > 0) {
    
    let digit = num % 10; // get last digit
    sum += digit;         // add to sum
    num = Math.floor(num / 10); // remove last digit
}

console.log("Sum of digits:", sum); // 10
