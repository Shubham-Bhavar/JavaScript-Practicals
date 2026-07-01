//Q.given an string array of name and add Mr. prefix to the name and return new array
const name=["shubham","sai","raj","ravi"];//get array of names

//we use map method to add prefix each element and return new array
const result = name.map((current)=>`Mr. ${current}`);
console.log(result);//at last we print new array
