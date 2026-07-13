// Question:
// Add a method last() to all arrays
// Return last element or -1 if array is empty

Array.prototype.last = function() {
    if (this.length === 0) {
        return -1; // empty array case
    }
    return this[this.length - 1]; // last element
};
