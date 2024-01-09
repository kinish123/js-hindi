const friends=["dhruv","devansh","ram"]
const friends2=["vansh","krishna","natik"]
friends.push(friends2);
console.log(friends);
console.log(friends[3][2])

const allfriends=friends.concat(friends2)
console.log(allfriends)

const allfriends2=[...friends,...friends2]
console.log(allfriends2)

const array=[1,2,3,4,[5,6,7,7],8,[6,7,[8,4]]]
const realarray=array.flat(Infinity);
console.log(realarray);

console.log(Array.isArray("kinish"));
console.log(Array.from("kinish"));
console.log(Array.from({name:"hitesh"})); //intreseting for interviews

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));