// Question:
// Check if the word "JavaScript" exists in the string

let text = "I love JavaScript";

// search() returns index of first match, or -1 if not found
let result = text.search("JavaScript");

if (result !== -1) {
    console.log("Word found at index:", result); // Expected: 7
} else {
    console.log("Word not found");
}
