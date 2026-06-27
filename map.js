// 🧠 Question:
// Given an array of students with name and marks,
// create a new array using map() where:
// - If marks >= 50 → "pass"
// - Else → "fail"
// Format output: "name - pass/fail"

let students = [
  { name: "shubham", marks: 92 },
  { name: "sai", marks: 90 },
  { name: "pooja", marks: 45 }
];

let newStudents = students.map((currentEle) => {
    // check pass or fail condition
    let result = currentEle.marks >= 50 ? "pass" : "fail";

    // return formatted string
    return `${currentEle.name} - ${result}`;
});

console.log(newStudents);
