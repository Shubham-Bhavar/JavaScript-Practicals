const reverse=(str)=>
{
            let reverse="";
            for(var char=str.length-1;char>=0;char--)
            {
                reverse = reverse+str[char];   
            }
            return reverse;
}
console.log(reverse("shubham"));
