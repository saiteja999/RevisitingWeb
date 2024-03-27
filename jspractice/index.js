arr =[1,2,3,4]

function double(x){
    return x*2
}

function isEven(x){
    return x%2 ==0
}

console.log(arr.map(double));
console.log(arr.filter(isEven))

console.log(arr.reduce((acc,curr)=> acc+curr, 0))

const op = arr.reduce(function(acc,curr){
    if(curr%2 == 0)
        acc+=curr
    return acc;
},0)

console.log(op)


const op1 = arr.reduce(function(max,curr){
    if(max<curr)
    max = curr

    return max;
},0)

console.log(op1)


const users =[
    {name: 'user1', age:26},
    {name: 'user2', age:32},
    {name: 'user3', age:26},
    {name: 'user4', age:53}
]

const dict = users.reduce(function(acc, curr){
    if(acc[curr.age])
        acc[curr.age]++;
    else
        acc[curr.age] = 1;

    return acc;
}, {})

console.log(dict);
