// let - local scope
let a = 10; // gloabl copy of a

function fun() {
  console.log(a); // global copy of a

  if (true) {
    let a = "Hello"; // local copy of a
    console.log(a);
  }
}
fun();
console.log(a); // global copy of a

// var
var c = "JavaScript"; // declaring a variable without let or const make it available in window object and this found anywhere
if (true) {
  console.log(c);
  if (true) {
    var c = "C++"; // dont creat a local copy, but modify the global copy
    console.log(c);
  }
}

console.log(c, b); // accessible

// difference between let and var 
var d = 1;
let e = 2;

if (true) {
  var d = 10;
  let e = 20;
  console.log(d); // Outputs 10
  console.log(e); // Outputs 20
}

console.log(d); // Outputs 10 (global variable a was reassigned)
console.log(e); // Outputs 2 (local variable b is block-scoped)
