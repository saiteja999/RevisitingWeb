/*
Before initialization, let and const are in temporal dead zone
We can't access variables when they are in temporal dead zone
*/


console.log(a) //prints undefined
console.log(b) //Uncaught Reference Error - Can't access b before initialization
console.log(c)

var a = 10
let b = 20
const c = 30
