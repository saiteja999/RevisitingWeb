/*
scope of var b - where I can access this var b
Is b inside scope of a xyz function
*/

function a(){           //a is lexically inside global scope
    var b =10;
    c()                 // c is lexically inside a 
    function c()        //closure of c is a(lexical scope)
    {
        var z = 20
        console.log(b)
    }
}

a()