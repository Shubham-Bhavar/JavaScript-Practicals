/*
Question:
Given an array arr and a function fn,
return a new array such that:
result[i] = fn(arr[i], i)

Do NOT use built-in map()
*/

var map = function(arr, fn) {
    let result = []; // new array

    // loop through array
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i)); // apply function
    }

    return result;
};
