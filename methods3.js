// ❓ find all numbers
let str = "a1 b2 c3";

let result = str.matchAll(/\d/g);

for (let x of result) {
    console.log(x[0]);
}
