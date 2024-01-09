//singleton
//oject literals

const mysym=Symbol("key1")

const jsuser={
    name:"kinish",
    fullname:"kinish neema",
    [mysym]:"mykey1", //interview
    age:20,
    location:"indore",
    email:"kinish@google.com",
    isloggedin:false,
    lastlogindays:["monday","saturday"]
}
console.log(jsuser.email)
console.log(jsuser["email"])
console.log(jsuser.fullname)
console.log(jsuser[mysym])//interviw

jsuser.email="kinish@chatgpt.com"
//Object.freeze(jsuser)
jsuser.email="kinish@google.com"    
//console.log(jsuser)

jsuser.greeting=function()
{
    console.log("hello js user");
}
console.log(jsuser.greeting());
jsuser.greetingtwo=function()
{
    console.log(`hello js user,${this.name}`);
}
console.log(jsuser.greetingtwo())
