/**
 * 🧠 Problem:
 * Create a class that:
 * 1. Supports addition using + operator → sum of all elements
 * 2. Supports String() → formatted array string
 *
 * ⚡ Key Concept:
 * - JS uses valueOf() for + operator
 * - JS uses toString() for String()
 *
 * ⏱ Time: O(n)
 * ⏱ Space: O(1)
 */

class ArrayWrapper {
    constructor(nums) {
        this.nums = nums;
    }

    // used when + operator is applied
    valueOf() {
        return this.nums.reduce((sum, num) => sum + num, 0);
    }

    // used when String() is called
    toString() {
        return `[${this.nums.join(',')}]`;
    }
}
