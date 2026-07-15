/**
 * 🧠 Problem:
 * Sort array based on value returned by function fn.
 * 
 * ⚡ Approach:
 * Use custom comparator with fn(a) - fn(b)
 * 
 * ⏱ Time: O(n log n)
 */

var sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};
