//for loop

for (let index = 0; index <= 10; index++) {
    const element = index;
    if(element==5)
    {
        console.log("5 is the best number")
    }
    console.log(element);
    
}


for (let i = 0; i <= 10; i++) {
    console.log(`outer value :${i}`)
    for (let j = 0; j <= 10; j++) {
        console.log(`inner value: ${j}`)
        console.log(i+'*'+j+'='+i*j);
    }
    
    
}


let myarr=["dhruv","kinish","devansh"]
for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    console.log(element);
    
}


//break and continue


for (let index = 1; index<= 20; index++) {
    if(index==5){
        console.log(`detected 5`)
        break;
    }
    console.log(`value of i is ${index}`);
    
}



for (let index = 1; index<= 20; index++) {
    if(index==5){
        console.log(`detected 5`)
        continue;
    }
    console.log(`value of i is ${index}`);
    
}


