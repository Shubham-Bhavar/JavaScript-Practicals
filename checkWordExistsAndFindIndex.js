// Question:
// Check if "javascript" exists in the sentence. If yes, print its index.

let sentence = "i love javascript";

// check if word exists
if (sentence.includes("javascript")) {
    
    // find position of the word
    let index = sentence.indexOf("javascript");
    
    console.log("Word found");
    console.log("Index is: " + index);

} else {
    console.log("Word not found");
}
