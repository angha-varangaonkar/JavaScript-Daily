const prompt=require("prompt-sync")()
function isEven(num){
    if (num%2==0) {
        return "even";
        
    } else {
        return "odd";
    }
}
// console.log(isEven(10));

const prt=prompt("enter the number ");
console.log(isEven(prt));