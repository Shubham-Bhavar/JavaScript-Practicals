/*
Question:
Create a counter object with:
1) increment → +1
2) decrement → -1
3) reset → set to initial value
*/

var createCounter = function(init) {
    let current = init; // store current value

    return {
        increment: function() {
            return ++current; // increase then return
        },
        decrement: function() {
            return --current; // decrease then return
        },
        reset: function() {
            current = init;  // reset to initial
            return current;
        }
    };
};

// Example
const counter = createCounter(5);

console.log(counter.increment()); // 6
console.log(counter.reset());     // 5
console.log(counter.decrement()); // 4
