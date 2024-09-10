// let arr =[2,8,3,3];
// arr.push(23);
// console.log(arr);

arr=[4,'angha',7.9,true,[4,7,8,9]]
// console.log(arr);
console.log(typeof(arr));


//loops 1. for loop 
//2.for each loop
//3. for of loop
// for (let i = 0; i < arr.length; i++) {
//     console.log(i,arr[i]);
    
    
// }


//for of 
// brr=[4,5,6,7,8,9,3]
// for (const ele of brr) {
    
//     console.log(ele); 
// }




//diffrence betwwen for loop and for of loop
//in for of the changes happen in the element and not in the array or object 
//where in for loop the changes happen in the array 
brr=[4,5,6,7,8,9,3];
console.log(brr);

// for (let i = 0; i < brr.length; i++) {
//     brr[i] *=2;
    
// }
// console.log(brr);

// for (let ele of brr) {
//     ele *=2;
//     console.log(ele);
// }
// console.log(brr);



//foreach works same as for of loop its just we can add element ,index and array 
brr.forEach((ele ,i,brr) => {
    // console.log(ele,i);
    ele *=2;
    console.log(ele);
    
    
});
console.log(brr);


