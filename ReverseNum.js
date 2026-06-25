/*
Program: Reverse a Number Using Function

Description:
Create a function that returns the reverse of a given number.

Example:
Input: 1234
Output: 4321
*/

function reverseNumber(num) {

    let reverse = 0;

    // Extract and reverse digits
    while (num > 0) {

        let digit = num % 10;

        reverse = reverse * 10 + digit;

        num = Math.floor(num / 10);
    }

    return reverse;
}

// Function Call
console.log(reverseNumber(1234));
