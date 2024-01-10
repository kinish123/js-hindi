//immediately invoked function expressions(iife)

(function chai()
{
    //named iife
    console.log("db chai");
})();

(()=>{
    console.log("db connected 2")
})();


((name)=>{
    console.log(`db connected 2 ${name}`)
})('kinish')