// Question:
// Extract the word "javascript" from the sentence.

let sentence = "i love javascript";

// find start position
let start = sentence.indexOf("javascript");

// find end position (start + length of word)
let end = start + "javascript".length;

// extract word using slice
let word = sentence.slice(start, end);

console.log("Extracted word: " + word);
