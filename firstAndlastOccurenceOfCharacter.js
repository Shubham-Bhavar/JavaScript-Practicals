// Question:
// Find the first and last occurrence of 'a' in the string "banana"

let text = "banana";

// indexOf() returns first occurrence index
let first = text.indexOf("a");

// lastIndexOf() returns last occurrence index
let last = text.lastIndexOf("a");

console.log("First 'a':", first);  // Expected: 1
console.log("Last 'a':", last);    // Expected: 5
