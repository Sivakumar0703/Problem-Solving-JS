
// Write a recursive function to reverse a string.


function reverse(string){
    return helpToReverse(string,0);
}

function helpToReverse(str,idx){
    if(idx >= str.length) return "";
    return helpToReverse(str , idx+1)+str[idx];
}

console.log("tamil nadu" , reverse("tamil nadu"));
console.log("india" , reverse("india"));