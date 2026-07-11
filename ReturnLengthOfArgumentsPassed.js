/*
Question:
Write a function that returns the number of arguments passed to it.
*/

var argumentsLength = function(...args) {
    return args.length; // count arguments
};

// Examples
console.log(argumentsLength(5)); // 1
console.log(argumentsLength({}, null, "3")); // 3
