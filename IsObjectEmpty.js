/**
 * 🧠 Problem:
 * Return true if given object/array is empty.
 * - Empty object → no keys
 * - Empty array → no elements
 *
 * 📥 Input:
 * obj = {} OR []
 *
 * 📤 Output:
 * true / false
 *
 * ⚡ Approach:
 * - Use Object.keys()
 * - If length === 0 → empty
 *
 * ⏱ Time: O(n)
 * ⏱ Space: O(n)
 */

var isEmpty = function(obj) {
    return Object.keys(obj).length === 0;
};
