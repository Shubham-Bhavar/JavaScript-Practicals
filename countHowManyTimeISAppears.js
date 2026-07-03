// Count how many times "is" appears in the string

let text = "This is a test. This is simple.";

// match all occurrences of "is"
let matches = text.match(/is/g);

// check if matches exist and count them
if (matches) {
    console.log("Count of 'is':", matches.length); // Expected: 4
} else {
    console.log("No match found");
}
