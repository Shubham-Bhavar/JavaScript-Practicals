/*
Program: Prime Number Using Function

Description:
Create a function that checks whether a number is prime or not.

Example:
Input: 13
Output: true

Input: 12
Output: false
*/

function isPrime(num) {

    // Numbers less than 2 are not prime
    if (num < 2) {
        return false;
    }

    // Check divisibility from 2 to num-1
    for (let i = 2; i < num; i++) {

        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

// Function Call
console.log(isPrime(13));
