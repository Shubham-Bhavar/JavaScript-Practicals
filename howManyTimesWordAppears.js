// Question:
// Count how many times "cat" appears in the string

let text = "cat dog cat bird cat";

// match() with /g returns all matches as array
let matches = text.match(/cat/g);

// If matches exist, count using length
if (matches) {
    console.log("Count of 'cat':", matches.length); // Expected: 3
} else {
    console.log("No match found");
}
