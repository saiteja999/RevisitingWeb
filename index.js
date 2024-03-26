//closure - a function bundled along with its lexical scope

function x(){
    var a = 7;
    function y()
    {
        console.log(a);
    }
    return y;
}

let z = x();
z(); //prints 7 - though func y is returned, it remembers its lexical scope(closure) - so we can access a and print it.