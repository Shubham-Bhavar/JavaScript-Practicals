/**
 * 🧠 Problem:
 * Delay execution of fn by t milliseconds.
 * Return a cancel function that cancels execution if called before t.
 *
 * 📥 Input:
 * fn = function
 * args = arguments array
 * t = delay in ms
 *
 * 📤 Output:
 * cancel function
 *
 * ⚡ Approach:
 * - Use setTimeout to delay fn execution
 * - Store timeout ID
 * - cancelFn clears the timeout
 *
 * ⏱ Time: O(1)
 * ⏱ Space: O(1)
 */

var cancellable = function(fn, args, t) {

    const timeoutId = setTimeout(() => {
        fn(...args);
    }, t);

    // cancel function
    return function cancelFn() {
        clearTimeout(timeoutId);
    };
};
