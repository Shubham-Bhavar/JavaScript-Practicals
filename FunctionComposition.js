/*
Question:
Given array of functions, return a function that applies them
from right to left (function composition).

If empty → return identity function (x => x)
*/

var compose = function(functions) {
    return function(x) {
        // apply functions from right to left
        for (let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x);
        }
        return x;
    };
};

// Example
const fn = compose([x => x + 1, x => x * x, x => 2 * x]);
console.log(fn(4)); // 65
