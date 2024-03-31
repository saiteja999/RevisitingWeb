"use strict"

console.log(this)

function print(){
    console.log(this);
}

print() //null
window.print() //window


let name={
    fname: "sai",
    lname: "ravi",
    printFullName: function(){
        console.log(this.fname + " " + this.lname)
    }
}

let name2 ={
    fname: "sachin",
    lname: "tendulkar"
}

name.printFullName.call(name2) //obj2 using method of obj1

let  printFullName = function(param1, param2){   //function not attached to any object
    console.log(this.fname + " " + this.lname + " "+ param1 + " "+ param2)
}

printFullName.call(name, "string1", "string2") //1st argument is always reference to this
printFullName.call(name2, "string1", "string2")

printFullName.apply(name, ["string1", "string2"]) //apply and call are similar. It just differs in the way how we are passing arguments

//bind - binds object state with method. can call method directly without arguments

let printMethod = printFullName.bind(name,"string1", "string2")

printMethod()