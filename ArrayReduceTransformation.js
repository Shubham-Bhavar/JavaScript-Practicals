/*
Question:
Given an array nums, a reducer function fn, and an initial value init,
apply fn sequentially:
val = fn(init, nums[0]), fn(val, nums[1]) ...
Return final value.

Do NOT use built-in reduce()
*/

var reduce = function(nums, fn, init) {
    let result = init; // start with initial value

    // iterate through array
    for (let i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]); // update accumulator
    }

    return result;
};
