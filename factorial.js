const prompt=require("prompt-sync")()

const number=parseInt(prompt("enter the number "));

let pro=1;
// for always use let

for (let fact = 1; fact <= number; fact++) {
    pro*=fact;
}

console.log(pro);