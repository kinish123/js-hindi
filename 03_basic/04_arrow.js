const user={
    username:"kinsh",
    price:999,
    welcomemessage:function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}
//this refers the current context

user.welcomemessage()
user.username="ram"
user.welcomemessage()

console.log(this);


// function chai()
// {
//     let username="kinish"
//     console.log(this.username);
// }
// chai()

const chai=()=>{
    let username="kinish"
    console.log(this)
    console.log(this.username)
}
chai()

const addtwo=(num1,num2)=>{
    return num1+num2
}
console.log(addtwo(3,4))


//implicite return
//const addtwo1=(num1,num2)=> num1+num2
const addtwo1=(num1,num2)=> (num1+num2)
console.log(addtwo1(1,2))   

const addtwo2=(num1,num2)=> ({username:"kinish"})
console.log(addtwo2(3,4))
