/**
 * 🧠 Problem:
 * Create expect(val) that returns:
 * - toBe(val) → checks strict equality (===)
 * - notToBe(val) → checks strict inequality (!==)
 *
 * 📤 Behavior:
 * - Return true if condition satisfied
 * - Throw Error if condition fails
 *
 * ⏱ Time: O(1)
 * ⏱ Space: O(1)
 */

var expect = function(val) {

    return {
        toBe: function(other) {
            if (val === other) {
                return true;
            }
            throw new Error("Not Equal");
        },

        notToBe: function(other) {
            if (val !== other) {
                return true;
            }
            throw new Error("Equal");
        }
    };
};
