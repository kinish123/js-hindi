let a=30
const b=20
var c=30//var cna be accesed from inside the scope

console.log(a)
console.log(b)
console.log(c)

let d=300;
if(true)
{
    let d=322;
    console.log("inner: ",a);
}
console.log(d);