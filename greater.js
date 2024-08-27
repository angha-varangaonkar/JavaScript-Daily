const prompt=require("prompt-sync")()
function isGreaterThanFive(num){
    if (num>5) {
        return true;
        
    } else {
        return false;
    }
}
// console.log(isGreaterThanFive(10));

const prt=prompt("enter the number ");
console.log(isGreaterThanFive(prt));