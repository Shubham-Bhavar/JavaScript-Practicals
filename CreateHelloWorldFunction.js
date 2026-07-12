/*
Question:
Return a function that always returns "Hello World"
(no matter what arguments are passed)
*/

var createHelloWorld = function() {
    return function(...args) {
        return "Hello World"; // fixed output
    };
};

// Example
const f = createHelloWorld();

console.log(f()); // "Hello World"
console.log(f({}, null, 42)); // "Hello World"
