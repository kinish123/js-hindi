const coding=["js","ruby","java","python","cpp"]

// const values=coding.forEach((item)=>{
//     console.log(item)
//     return item
// })
// console.log(values)

const mynums=[1,2,3,4,5,6,7,8,9,10]
// const newnums=mynums.filter((num)=>num>4)

// const newnums1=mynums.filter((num)=>{
//     return num>4
// })

// console.log(newnums)


const newnums=[]
mynums.forEach((num)=>{
    if(num>4)
    {
        newnums.push(num)
    }
})
console.log(newnums);



const books=[
    {title:'book one',genre:'fiction',publish:1982,edition:2004},
    {title:'book two',genre:'non-fiction',publish:1982,edition:2001},
    {title:'book three',genre:'history',publish:1982,edition:1904},
    {title:'book four',genre:'non-fiction',publish:1982,edition:1904},
    {title:'book five',genre:'science',publish:1982,edition:2012},
    {title:'book six',genre:'fiction',publish:1982,edition:2013},
    {title:'book seven',genre:'history',publish:1982,edition:2014},
    {title:'book eight',genre:'fiction',publish:1982,edition:1900},

];
//const userbooks=books.filter((bk) => bk.genre==="history")
const userbooks=books.filter((bk) =>{
    return bk.edition<2000 && bk.genre==="history"
})
console.log(userbooks)