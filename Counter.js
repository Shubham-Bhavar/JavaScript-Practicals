/*
Question:
Create a counter function that:
First call → returns n
Next calls → return n+1, n+2, ...
*/

var createCounter = function(n) {
    return function() {
        return n++; // return current value, then increment
    };
};

// Example
const counter = createCounter(10);

console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
