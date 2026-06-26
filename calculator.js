const calculate=(a,b,operator)=>
{
    switch(operator)
    {
        case "+":return a+b;break;
        case "-":return a-b;break;
        case "*":return a*b;break;
        case "/":return a/b;break;
    }
}
console.log(calculate(10,20,"+"));
console.log(calculate(10,20,"-"));
console.log(calculate(10,20,"*"));
console.log(calculate(10,20,"/"));
