//Q.get an array of numbers and return only even numbers square

const numbers=[1,2,3,4,4,5,6,7,8,89,0];//array of numbers 

//we use map method to return an array of numbers 
const result=numbers.map((current)=>{
    if(current % 2===0)//check if number is even or not
    return current*current
}).filter((current)=>current!==undefined);//use filter method to only get square of even numbers 
console.log(result);//print the new array with even numbers square
