// Q1: Check whether a string is a pangram or not
function isPangram(str) {
    let set = new Set();//set can't contains duplicate values

    for (let char of str.toLowerCase()) {
        if (char >= 'a' && char <= 'z') {
            set.add(char);
        }
    }

    return set.size === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
