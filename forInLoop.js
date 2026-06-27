// 🧠 Question:
// Given a cart array, perform operations:
// 1. Add "butter" at end
// 2. Remove first item
// 3. Add "juice" at beginning
// 4. Convert items to uppercase using map()
// 5. Print final results using loop

let cart = ["milk", "bread", "eggs"];

cart.push("butter");    
// add at end → ["milk","bread","eggs","butter"]

cart.shift();           
// remove first → ["bread","eggs","butter"]

cart.unshift("juice");  
// add at start → ["juice","bread","eggs","butter"]

let newCart = cart.map(currentEle => {
    return currentEle.toUpperCase();
    // convert each item to uppercase
});

console.log(cart);      
// original array

console.log(newCart);   
// transformed array

// correct loop (for...of → values)
for (let item of newCart) {
    console.log(item);
}
