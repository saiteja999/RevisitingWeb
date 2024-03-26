function print1()
{
    console.log('print1')
}


var print2 = function(){
    console.log('print2')
}

var print3 = function sample(){
    console.log('print3')
}

var print4 = () =>{
    return 'print4'
}

var print5 = ()=> 'print5'



print1();
print2();
print3();
console.log(print4());
console.log(print5());