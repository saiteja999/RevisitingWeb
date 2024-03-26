function x()
{
    var i =1
    setTimeout(function(){
        console.log("set timeout function")
    }, 2000)
    console.log("In func");
}


// console.log(1);
// x();
// console.log(2);


//o/p:- 1, In func, 2, set timeout func


//prints 6,6,6,6,6 instead of 1,2,3,4,5,6

// function print1() //setTimeOut takes reference of i(6)
// {
//     for(var i=1; i< 6; i++)
//     {
//         setTimeout(function(){
//             console.log(i)
//         },i*1000)
//     }
// }

// print1();


function print2(){ //prints 1,2,3,4,5,6 -  Block scoped
    for(let i=1; i< 6; i++)
    {
        setTimeout(function(){
            console.log(i)
        },i*1000)
    }
}

//print2();


//with var - var is function scoped - new function, new scope for var

function print3() //achieving same with var
{
    for(var i=1; i< 6; i++)
    {
        function close(x)
        {
            setTimeout(function(){
                console.log(x)
            },x*1000)
        }
        close(i);
    }
}

print3();