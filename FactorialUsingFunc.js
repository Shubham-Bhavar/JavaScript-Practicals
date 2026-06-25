/*
Program: Factorial Using Function

Description:
Create a function that returns the factorial of a given number.

Example:
Input: 5
Output: 120

Factorial:
5! = 5 × 4 × 3 × 2 × 1 = 120
*/

function factorial(num) {

    let fact = 1;

    // Multiply numbers from 1 to num
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }

    return fact;
}

// Function Call
console.log(factorial(5));
