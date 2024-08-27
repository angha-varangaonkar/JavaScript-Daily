const prompt =require ("prompt-sync")()

const prt= parseInt(prompt ("enter the number "));
if (prt>0) {
    console.log("positive ")
}
else if(prt==0)
{
    console.log("zero");

}
else{
    console.log("negative number");
}