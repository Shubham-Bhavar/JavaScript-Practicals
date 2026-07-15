// Given an array and a chunk size,
// split the array into subarrays of given size
// and return the chunked array.

var chunk = function(arr, size) {
    let result = [];

    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }

    return result;
};
