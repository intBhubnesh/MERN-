const n = 10;
let arr = [];

// for loop - itteration based looping
let j = 0;

for (let i = 0; i < n; i++) {
  arr.push(i);
}
console.log(arr);

arr.splice(0);
console.log(arr + "hello");
// while loop - condition based looping

while (j < n) {
  arr.push(j);
  j++;
}
console.log(arr);
arr.splice(0);

// do while loop  - exit controll loop

let k = 10;

do {
  k--;
  arr.push(k);
} while (k < 10 && k > 0);

console.log(arr);

const fruits = ["apple", "banana", "orange"];

// for in loop - It loops through the keys (or indices) of the object.

for (let index in fruits) {
  console.log(index); // Outputs: 0, 1, 2
}

// NEW IN ES6
// for of loop - It loops through the values of the iterable object.
for (let fruit of fruits) {
  console.log(fruit); // Outputs: apple, banana, orange
}



// loop control key words in loops

// 1. Break - terminate the loop and come out normal flow of execution

for(let i = 0; i <= 5; i++){
    if(i == 3){
      break
    }
    console.log(i)
  }
  
  // 0 1 2

// 2. Continue - skip the current itteration od the loop 

  for(let i = 0; i <= 5; i++){
    if(i == 3){
      continue
    }
    console.log(i)
  }
  
  // 0 1 2 4 5
 
// 3. Return - terminate the execution function aand move the scope of execution to the
//                the calling function .


 