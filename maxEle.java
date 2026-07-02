// Question:
// Find the largest number in an array

let arr = [10, 25, 7, 40, 15];

let max = arr[0]; // assume first element is largest

for (let i = 1; i < arr.length; i++) {
    
    // compare each element
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log("Largest number is:", max); // 40
