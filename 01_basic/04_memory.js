//stack(primitive) ==string,number,bigint,boolian,null ,undefined,symbol and 
//heap(non primitive)==arry,object,functions
//in stack the copy of original value is changed
//in heap the changes are made in the original values

let myyoutubename="kinishneema"
let anothername=myyoutubename
anothername="chaiorcode"

console.log(myyoutubename);
console.log(anothername);

let userone={
    email:"kinish@gmail.com",
    upi:"kinish@yre"
}
let usertwo=userone;

userone.email="kinishneema@gmail.com"

console.log(userone.email);
console.log(usertwo.email);


