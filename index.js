//Higher Order Functions

const area = function(radius){
    return Math.PI*radius*radius;
}

const circumference = function(radius){
    return Math.PI*2*radius;
}

function calculate(logic, radius){
    for(var i=1; i < radius; i++)
    {
        console.log(logic(i));
    }
}

//calculate(area,5);
//calculate(circumference, 5);

const arr = [1,2,3,4,5]
//to add a func as array method

Array.prototype.func = function(logic){ //access elements of array using this
    for(var i=1; i< this.length; i++)
    {
        console.log(logic(i));
    }
}

console.log(arr.map(area));
arr.func(area)