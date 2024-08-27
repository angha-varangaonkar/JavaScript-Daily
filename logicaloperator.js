const prompt=require("prompt-sync")()
function isBetweenOneAndTen(num){
    if (num>=1 && num<=10) {
        return true;
        
    } else {
        return false;
    }
}
// console.log(isBetweenOneAndTen(8));

const prt1=prompt("enter the number ");
console.log(isBetweenOneAndTen(prt1));