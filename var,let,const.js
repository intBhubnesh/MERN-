//var 
var name = "Bhubnesh"
var age = "24"

function printDetails(){
    var city = "Bhubaneswar"
    console.log(`${name}'s age is ${age}, he lives in ${city}.`)
}

//console.log(city) // ReferenceError: city is not defined

// Difference between block scope and function scope 
function fun(){
    var a = 10
}

if(true){
    var b = 20
}

console.table([a,b]) // a is not defined - b is defined
// because var is function scope and let is block scope



// function scope - var
function varSum(){
    var num1 = 1 
    var num2 = 2 

    if(num1>num2){
        num3 = num1-num2
    }
    else{
        num3 = num2-num1
    }

    console.log(num3) // 1
    // here we can access the block scope variables throughout the function 

}

// block scope - let and const 
function letSum(){
    let num1 = 1 
    let num2 = 2 

    if(num1>num2){
      let num = num1-num2
    }
    else{
      let  num = num2-num1
    }

    // console.log(num) // ReferenceError: num is not defined
    console.log(num3) // 1
    // here num3 is accessible due to closure
}
// console.log(num3) // ReferenceError: num3 is not defined
varSum()
letSum()


// declaration and redeclaration in let and const


const empID = 231
// let name = "Bhubnesh"

// empID = 000 // TypeError: Assignment to constant variable.
name = "Bhubnesh Maharana"

// const empID = 431 // SyntaxError: Identifier 'empID' has already been declared 
// let name = "Disnesh" // SyntaxError: Identifier 'name' has already been declared


// Hosting
console.log(num1) // undefined 
var num1 = 10 

// console.log(num2) // ReferenceError: Cannot access 'num2' before initialization
let num2 = 12 



// var,let and const comparision 

var a = 10 
let b = 20 
const c = 30 
d = 40 // this is another way of decaring a var variable

// to print all the data in tabular format we will use console.table() method
console.table({a,b,c,d})


// update the values of the variable 
a = 11
b = 21
// c = 31 // TypeError: Assignment to constant variable.
d = 41 

console.table({a,b,c,d})

// reassigning the values of the variables 
var a = 12
// let b = 22 // SyntaxError: Identifier 'b' has already been declared
// const c = 32 // SyntaxError: Identifier 'c' has already been declared
d = 42

console.table({a,b,c,d})


// conclusion 
// var - functional scope, we can redeclare and update the value of the variable
// let - block scope, we can update the value of the variable but we cannot redeclare the variable
// const - block scope, we cannot update and redeclare the variable
