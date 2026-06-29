// Question:
// Check if "javascript" appears once or multiple times.

let sentence = "javascript is easy and javascript is fun";

// first occurrence
let first = sentence.indexOf("javascript");

// last occurrence
let last = sentence.lastIndexOf("javascript");

// compare
if (first === last) {
    console.log("Word appears only once");
} else {
    console.log("Word appears multiple times");
}
