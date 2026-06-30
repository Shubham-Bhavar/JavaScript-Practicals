// ❓ Question:
// Find the index of product with id = 3 using findIndex()
// and update its price to 250.

const products = [
  { id: 1, price: 100 },
  { id: 2, price: 200 },
  { id: 3, price: 300 }
];

// Find index of product where id is 3
const result = products.findIndex(c => {
  return c.id === 3; // condition check
});

// Check if product exists (index not -1)
if (result !== -1) {
  // Update price of that product
  products[result].price = 250;
}

// Print updated array
console.log(products);
