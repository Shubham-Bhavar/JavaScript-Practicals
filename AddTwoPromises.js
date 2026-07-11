/*
Question:
Given two promises, return a new promise
that resolves with the sum of their results.
*/

var addTwoPromises = async function(promise1, promise2) {
    let val1 = await promise1; // wait for first promise
    let val2 = await promise2; // wait for second promise

    return val1 + val2; // return sum
};
