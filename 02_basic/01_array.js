//array

const  myarr=[0,1,2,3,4,5]
const myheros=['dfsdvdv','vdfsvdfvdf']
const array2=new Array(1,2,3,4);

console.log(myarr[1]);

myarr.push(1);
myarr.push(7);
myarr.pop();

myarr.unshift(1)
myarr.shift()   
console.log(myarr)
console.log(myarr.includes(1))
console.log(myarr.indexOf(9))

const newArr=myarr.join()
console.log(myarr)
console.log(newArr)

//slice ,splice

console.log("a",myarr)
const myn1=myarr.slice(1,3)
console.log(myn1);
console.log("b",myn1)

const myn2=myarr.splice(1,3)
console.log("c",myn2)
console.log(myarr)

//difference between slice and splice is the splice prints all the remaining values