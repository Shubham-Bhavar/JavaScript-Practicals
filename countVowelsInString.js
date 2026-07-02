// Question:
// Count number of vowels in a string

let str = "hello world";
let count = 0;

for (let i = 0; i < str.length; i++) {
    
    let ch = str[i];

    // check vowel
    if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
        count++;
    }
}

console.log("Vowel count:", count); // 3
