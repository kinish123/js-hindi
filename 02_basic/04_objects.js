//const tinderuser=new Object()
const tinderuser={}
tinderuser.id="123abc"
tinderuser.name="kinish"
tinderuser.isloggedin=false
//console.log(tinderuser)

const regularuser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
             firstname:"kinish",
             lastname:"neema"
        }
    }
}
console.log(regularuser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}


//const obj3={obj1,obj2}
//const obj3=object.assign({},obj1,obj2,obj4)

const obj3={...obj1,...obj2}
console.log(obj3);

const users=[
    {
        id:1,
        email:"kinish@gmail.com"    
    },
    {
        id:1,
        email:"kinish@gmail.com"    
    },
    {
        id:1,
        email:"kinish@gmail.com"    
    },
    {
        id:1,
        email:"kinish@gmail.com"    
    },
    
]
users[1].email

console.log(tinderuser);
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))
console.log(tinderuser.hasOwnProperty('isloggedin'))



const course={
    coursename:"js in hindi",
    price:"999",
    courseinstructor:"kinish"
}

const{courseinstructor}=course
console.log(courseinstructor)

const{courseinstructor:instructor}=course
console.log(instructor)

