const name="kinish";
const repocount=50;
console.log(name+repocount+"value");

console.log(`hello my name is ${name} and my repo count is ${repocount}`);

const gamename=new String('kinish');
console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('i'));


const newstring=gamename.substring(0,4);
console.log(newstring);

const anotherstring=gamename.slice(-8,4);
console.log(anotherstring);


const newstring1="  kinish   ";
console.log(newstring1);
console.log(newstring1.trim());


const url="https://kinish.com/kinish%20neema";
console.log(url.replace('%20','-'));
console.log(url.includes('kinish'));

const newstring3="kinish-neema-123-dhruv";
console.log(newstring3.split('-'));