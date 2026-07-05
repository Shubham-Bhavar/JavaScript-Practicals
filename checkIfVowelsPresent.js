// Q3: Check if all vowels are present in a string
function hasAllVowels(str) {
    let vowels = "aeiou";

    for (let v of vowels) {
        if (!str.toLowerCase().includes(v)) {
            return false;
        }
    }

    return true;
}

console.log(hasAllVowels("education"));
