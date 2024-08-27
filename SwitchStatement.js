const prompt =require("prompt-sync")()

const number=parseInt(prompt("enter the day from : 1-7 "));

function getDayType(num){
   
    switch (num) {
        case 1 :
        case 2:
        case 3:
        case 4:
        case 5: 
            return "weekday";
          
        case 6:
        case 7:
            return "weekend";
         
        default:
            return"invalid details";
       
    }
}

console.log(getDayType(number));