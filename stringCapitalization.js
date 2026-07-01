//Q.given an string array and return every element of array in capital letter

const name=["Apple","Banana","grapS","ManGo","chErry"];//array of strings

//we use map method to return new array
const result=name.map((current)=>current.toUpperCase());//for getting string capitalize we use string function toUpperCase()

console.log(result);//print new array with capitalize string
