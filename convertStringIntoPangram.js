// Q3: Add missing letters to make string a pangram
function makePangram(str) {
    let missing = missingLetters(str);
    return str + missing.join("");
}

// helper function
function missingLetters(str) {
    let result = [];
    str = str.toLowerCase();

    for (let i = 97; i <= 122; i++) {
        let ch = String.fromCharCode(i);
        if (!str.includes(ch)) {
            result.push(ch);
        }
    }

    return result;
}

console.log(makePangram("hello"));
