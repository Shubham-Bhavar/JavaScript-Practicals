// Program to find the sum of even numbers from 1 to N

let n = 10;
let sum = 0;

for (let i = 1; i <= n; i++) {

    // Check if the number is even
    if (i % 2 === 0) {
        sum = sum + i;
    }
}

console.log("Sum = " + sum);
