// ❓ Question:
// From the given products array, filter all products
// whose price is less than 250 and print them.

const products = [
  { id: 1, price: 100 },
  { id: 2, price: 200 },
  { id: 3, price: 300 }
];

// Filter products with price < 250
const result = products.filter(currentEle => {
  return currentEle.price < 250; // condition
});

// Print filtered array
console.log(result);
