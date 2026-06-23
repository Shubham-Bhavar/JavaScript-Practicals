// ----------------------
// Type Coercion Example
// ----------------------

// Store numeric values as strings
var a = "50";
var b = "10";

// '+' performs string concatenation
console.log(a + b); // Output: 5010

// '-', '*', '/' convert strings to numbers automatically
console.log(a - b); // Output: 40
console.log(a * b); // Output: 500
console.log(a / b); // Output: 5


// ----------------------
// NaN Example
// ----------------------

// Store a non-numeric string
var x = "Shubham";

// Store a numeric string
var y = "10";

// JavaScript tries to convert "Shubham" to a number
// Conversion fails, so result becomes NaN
console.log(x - y); // Output: NaN

// Multiplication also fails
console.log(x * y); // Output: NaN

// Division also fails
console.log(x / y); // Output: NaN

// Check the data type of NaN
console.log(typeof(NaN)); // Output: number
