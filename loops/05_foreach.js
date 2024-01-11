//for each

const coding=["js","ruby","java","python","cpp"]
coding.forEach(function (item){
    console.log(item)
})


coding.forEach((item)=>{
    console.log(item);
})

function printme(item)
{
    console.log(item);
}
coding.forEach(printme)


// coding.foreach((item,index,arr)=>{
//     console.log(item,index,arr);
// })



const mycodding=[
    {
        languagename:"javascript",
        languagefilename:"js"
    },
    {
        languagename:"java",
        languagefilename:"java"
    },
    {
        languagename:"python",
        languagefilename:"py"
    }

]
mycodding.forEach((item)=>{
console.log(item.languagefilename)
})
