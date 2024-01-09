function saymyname(){

    console.log("k");
    console.log("i");
    console.log("n");
    console.log("i");
    console.log("s");
    console.log("h");
    }
    saymyname()
    
    // function addtwonum(num1,num2)
    // {
    //     num3=num1+num2;
    //     console.log(num3);
    
    // }
    // const result=addtwonum(3,4)
    // console.log("result:" ,result)


     function addtwonum(num1,num2)
    {
        let result=num1+num2
        return result
        //return num1+num2;
    }
    const result=addtwonum(5,3)
    console.log("resut:", result);
    

    function loginusermessage(username){
        return `${username} just logged in`;
    }
    console.log(loginusermessage("kinish"));
    

    function loginusermessage1(username){
        if(username===undefined)
        {
            console.log("please enter the user name")
            return
    
        }
        return `${username} just logged in`;
    }
    console.log(loginusermessage1());
    

    function addcart(...num1)
    {
        return num1
    }
    console.log(addcart(200,300,44,432))


    function addcart1(val1,val2,...num1)
    {
        return num1
    }
    console.log(addcart1(200,300,44,432))
    
    
    const user=
    {
        username:"kinish",
        price:199
    }
    function handleobject(anyobject){
        console.log(`user name is ${anyobject.username} and price of ${anyobject.price}`)
    }
    //handleobject(user)
    handleobject({
        username:"kinish",
        price:132
    })
    
    
    const mynewarray=[200,300,400]
    function returnsecondvalue(getarray)
    {
        return getarray[1]
    }
    //console.log(returnsecondvalue(mynewarray))
    console.log(returnsecondvalue([100,200,300,400]))