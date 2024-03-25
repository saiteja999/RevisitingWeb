console.log(x);         //Hoisting - can access x even before initialization - undefined
console.log(printHello) //prints func code
console.log(getName)   //undefined
console.log(getName1) //undefined

var x = 2;

function printHello()
{
    console.log('Hello')   //place debug point here to check this func in execution context
}

var getName = function(){   //function expression - behaves as variable and not as function - so prints undefined
    console.log("Prints name")
}

var getName1 = () => {
    console.log("Prints name1");
}

printHello()   //Brings printHello to callstack at the time of excecution 