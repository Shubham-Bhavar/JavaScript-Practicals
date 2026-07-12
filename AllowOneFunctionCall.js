/*
Question:
Return a function that calls fn only once.
After first call → always return undefined.
*/

var once = function(fn) {
    let called = false; // track if already called

    return function(...args) {
        if (called) return undefined; // already used

        called = true; // mark as called
        return fn(...args); // call original function
    };
};

// Example
const fn = (a, b, c) => a + b + c;
const onceFn = once(fn);

console.log(onceFn(1,2,3)); // 6
console.log(onceFn(2,3,6)); // undefined
