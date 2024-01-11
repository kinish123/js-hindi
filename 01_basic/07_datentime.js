let mydate=new Date();
//console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate); //object

let mycreateddate=new Date(2023,0,23);
console.log(mycreateddate);
console.log(mycreateddate.toDateString());


let mycreateddate1=new Date(2023,0,23,5,3);
console.log(mycreateddate1.toLocaleString());

let mycreateddate2=new Date("2024-01-09");
console.log(mycreateddate2.toLocaleString());

let mytimestamp=Date.now();
console.log(mytimestamp);
console.log(mycreateddate2.getTime());

//convert it in seconds

console.log(Math.floor(Date.now()/1000));

let newdate=new Date();
console.log(newdate);

console.log(newdate.getMonth()+1);
console.log(newdate.getDay());

newdate.toLocaleString("default",{
    weekday:"long"
})