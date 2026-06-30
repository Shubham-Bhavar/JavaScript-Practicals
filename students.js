// ❓ Question:
// Given an array of students:
// 1. Find the first student with marks > 50 using find()
// 2. Find the index of first student with marks < 50 using findIndex()
// 3. Get all students with marks > 40 using filter()

const students = [
  { name: "A", marks: 40 },
  { name: "B", marks: 75 },
  { name: "C", marks: 60 }
];

// 1️⃣ find(): returns first matching object
const result = students.find(c => {
  return c.marks > 50;
});

// 2️⃣ findIndex(): returns index of first match
const result2 = students.findIndex(c => {
  return c.marks < 50;
});

// 3️⃣ filter(): returns all matching elements in array
const result3 = students.filter(c => {
  return c.marks > 40;
});

// Print results
console.log(result);
console.log(result2);
console.log(result3);
