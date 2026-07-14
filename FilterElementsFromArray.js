/*
Question:
Given an array arr and a function fn,
return a filtered array such that:
include arr[i] only if fn(arr[i], i) is truthy

Do NOT use built-in filter()
*/

var filter = function(arr, fn) {
    let result = []; // new array

    // iterate through array
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) { // check truthy condition
            result.push(arr[i]); // include element
        }
    }

    return result;
};
