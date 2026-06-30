// ❓ Question:
// Given an array of customers, find the customer whose id is equal to 2
// using the JavaScript find() method and print the result.

let customer = [
  { id: 2, name: "shubham" },
  { id: 3, name: "rahul" },
  { id: 1, name: "pooja" }
];

// Target id to search
const id = 2;

// Using find() to get the first matching customer object
const customerFound = customer.find(currentEle => {
  // Check if current element's id matches the target id
  return currentEle.id === id;
});

// Print the result
console.log(customerFound);

// Optional: print only the name
// console.log(customerFound.name);
