const mynums=[1,2,3]
const mytotal=mynums.reduce(function(accumulator,currentvalue){
    console.log(`acc:${accumulator} and currentvalue:${currentvalue}`)
    return accumulator+currentvalue
} ,0)
console.log(mytotal)


//arrow function

const mytotal1=mynums.reduce((acc,current)=>acc+current,0)
console.log(mytotal1)




const shoppingcart=[
    {
        itemname:"js course",
        price:2000
    },
    {
        itemname:"python",
        price:1000
    },
    {
        itemname:"cpp",
        price:1300
    },
    {
        itemname:"c",
        price:300
    }
]
const pricetopay=shoppingcart.reduce((acc,item)=> acc+item.price,0)
console.log(pricetopay)