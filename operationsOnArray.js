// 🧠 Question:
// Given an array "queue", perform the following operations:
// 1. Add "d" at the end using push()
// 2. Remove last element using pop()
// 3. Add "z" at the beginning using unshift()
// 4. Use map() to convert each element into "Person X" format
// 5. Print original and new array

let queue = ["a", "b", "c"];

queue.push("d");      
// add "d" at end → ["a","b","c","d"]

queue.pop();          
// remove last element → ["a","b","c"]

queue.unshift("z");   
// add "z" at start → ["z","a","b","c"]

let newQueue = queue.map((currentEle, index) => {
    // map creates a new array without changing original array
    return `Person ${currentEle}`;
});

console.log(queue);     
// original array

console.log(newQueue);  
// transformed array
