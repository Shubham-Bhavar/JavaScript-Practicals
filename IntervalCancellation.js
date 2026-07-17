/**
 * 🧠 Problem:
 * - Call fn immediately
 * - Then call fn every t ms
 * - Stop when cancelFn is called
 *
 * ⚡ Approach:
 * - Call fn once immediately
 * - Use setInterval for repeated calls
 * - Return cancel function using clearInterval
 *
 * ⏱ Time: O(1)
 * ⏱ Space: O(1)
 */

var cancellable = function(fn, args, t) {

    // call immediately (time = 0)
    fn(...args);

    // schedule repeated calls
    const intervalId = setInterval(() => {
        fn(...args);
    }, t);

    // cancel function
    return function cancelFn() {
        clearInterval(intervalId);
    };
};
