/**
 * 🧠 Problem:
 * Return a promise that resolves after given milliseconds.
 *
 * ⚡ Approach:
 * Use Promise + setTimeout
 *
 * ⏱ Time: O(1)
 * ⏱ Space: O(1)
 */

async function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}
