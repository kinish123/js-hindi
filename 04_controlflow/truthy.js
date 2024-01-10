//const useremail="ki@gmail.com"
//const useremail=[]
if(useremail)
{
    console.log("got the user email");
}
else{
    console.log("dont have the user email");
}

//falsy value
//false,0,-0,bigint 0n,"",null,undefined,NaN

//truthy values
//"0",'false'," ",[],{},function(){}

// if(useremail.length===0)
// {
//     console.log("array is empty")
// }

// const emptyobj={}
// if(Object.keys(emptyobj).length===0){
//     console.log("object is empty");
// }



//nullish coalescing operator(??):null undefined
let val1;
val1=5 ?? 10
val1=null ?? 10
val1=undefined ?? 15
val1=null ?? 10 ?? 20

console.log(val1)


//terniary operator

//condition? true:false
const iceteaprice=100;
iceteaprice>=80 ? console.log("less than 80"):console.log("more than 80");