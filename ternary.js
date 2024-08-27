const prompt=require("prompt-sync")()
function checkAge(age){
    if (age>18) {
        return"Adult";
        
    
    } else {
        return"Minor";
        
    }
}
// console.log(checkAge(34))

const ptr=prompt("enter your age ");
console.log(checkAge(ptr));