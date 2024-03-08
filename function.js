function printFullName() {
  let firstName = "Bhubnesh";
  let lastName = "Maharana";
  let fullName = ` ${firstName} ${lastName}`;
  return fullName;
}
console.log(printFullName());

// function declaration

// without parameter and return value 

// function declaration
function greet(){
 console.log("Hello JavaScript ✌ !")
}

temp = greet()
console.log(greet) // [Function: greet] -> print the reference address 
console.log(temp) // this is not returning anything thus its undefined

// function with return type 
function today(){
    var x = new Date()
    return x
}

const d1 = today()
console.log(today()) // 2024-03-08T08:19:09.145Z
console.log(d1)      // 2024-03-08T08:19:09.145Z

// function with parameter 
function sum(a, b){
    return a+b
}

let s1 = sum(10, 5)
console.log(s1) // 15
console.log(sum(4,9))  // 13
console.log(sum(4,9,10, 11))  // 13 -> here also we have same output 

//function with multiple parameters - argument key word 

// every function has a parameter object which is a array which store all the parametes
function sum_1(){
    let x = 0
    for(const num of arguments)
        x += num

    return x
}

console.log(sum_1(4,9,10, 11))  // 13 -> here also we have same output 


// anonymous function
const anonymousFun = function () {
    console.log("This is a anonnymous function !")
}


// anonymous function expression 
const sub = function (a,b){
    if(a>b) return a-b
    else return b-a
}

console.log(sub(10,9)) // 1


// regular function expression
const mult = function mult(a,b) {
    return a*b
}

console.log(mult) // [Function: mult]
console.log(mult(10,7)) // 70


// self invoking function 
const div = (function div(a,b) {
    return a/b
})(10,5)

console.log(div) // 2 


// arrow function
const hi = string => `Hello ${string}`

console.log(hi("Bhubnesh")) // Hello Bhubnesh

// arrow function overloading 
const arrowOverload = (...args) => {
    let sum = 0
    for(const num of args){
        sum += num
    }
    return sum
}

console.log(arrowOverload(10)) // 10
console.log(arrowOverload(10,20)) //20
console.log(arrowOverload(10,20,30)) //30


// arrow function default parameter 
let defaultArrow = (name = "Bhubnesh") => `Good Morning ${name} 😴`

console.log(defaultArrow()) // Good Morning Bhubnesh 😴
console.log(defaultArrow("Ganesh")) // Good Morning Ganesh 😴

