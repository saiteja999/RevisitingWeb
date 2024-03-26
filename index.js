{
    // this is a block
}

var a = 50;

{
    var a = 10   //global scope - accessible out of this block as well - Shadowing
    let b = 20   //Block scope  - present only in this block
    const c = 30 //Block scope
}

console.log(a); //prints 10(not 50)


//Illegal shadowing 
// let a = 20; - we can't define let a since var a is in same scope

/*   similarly, this gives error

let z = 50;
{
    var z = 20;
}

*/