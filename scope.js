// let 
let a = 10

const b = 20 

var c = 30

console.log(a,b,c)

// twist in story 
{
  //scope -> real game changer  
}

// TYPES OF SCOPING 

// global scope

{
  // block scope 
}

function fun(){
  // function scope 
}


// DIFFERENCE BETWEEN VAR AND LET

if(true){
  let a = 1
  const b = 2
  var c = 3
  console.log('block scope :', a,b,c);  // 1 2 3
}

console.log('global scope :', a,b,c);  // 10 20 3


// SCOPE LEVEL

let user = 'Bhubnesh Maharana'

function fun(){
  let userJob = 'Software Engineer'
  function greet() {
    let greet = 'Hello'
    console.log(`${greet} ${user} ${userJob}`)
  }
  console.log(`${user} ${userJob}`)
  greet()
}

fun()


// HOISTING

// console.log(variable) // can't access the variable before declaration
// let variable = 10 


// Similarlly function expression can't be hoisted

console.log(fun()) 
function fun(){
  return 10
}

// console.log(notFun())
// let notFun = function(){
//   return 12
// }

