//for of

const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num)
}

const greeting="hello world"
for (const greet of greeting) {
console.log(`each char is ${greet}`)
}



//maps

const map=new Map()
map.set('IN','India')
map.set('usa',"united states of america")
map.set('fr',"france")
//unique value
console.log(map)

for (const key of map) {
    console.log(key)
}

for (const [key,value] of map) {
    console.log(key, ":-" ,value)
}

const myobject={
    'game1':'nfs',
    'game2':'gta'
}
for (const [key,value] of myobject) {
    console.log(key, ":-" , value)
}