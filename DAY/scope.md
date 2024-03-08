## Scope

Variable is the fundamental part in programming. We declare variable to store different data types. To declare a variable we use the key word _var_, _let_ and _const_.

Anything declared without let, var or const is scoped at global level.

### Window Global Object

Without using console.log() open your browser and check, you will see the value of a and b if you write a or b on the browser. That means a and b are already available in the window.

```js
//scope.js
a = "JavaScript"; // declaring a variable without let or const make it available in window object and this found anywhere
b = 10; // this is a global scope variable and found in the window object
function letsLearnScope() {
  console.log(a, b);
  if (true) {
    console.log(a, b);
  }
}
console.log(a, b); // accessible
```

### Global scope

A globally declared variable can be accessed every where in the same file. But the term global is relative. It can be global to the file or it can be global relative to some block of codes.

```js
//scope.js
var c = "JavaScript"; // declaring a variable without let or const make it available in window object and this found anywhere
var b = 10; // this is a global scope variable and found in the window object
function letsLearnScope() {
  console.log(c, b); // accessible
}
letsLearnScope();
console.log(c, b); // accessible
```

### Local scope

A variable declared as local can be accessed only in certain block code.

- Block Scope
- Function Scope

```js
let globalVar = 10;

function fun() {
  globalVar = 20; // acccess the parent variables
  let localVar = 11; // function scope
  console.log(globalVar, localVar);
}

// cant acces the local vaiable outsid there scope
```

**NOTE**
Now, you have an understanding of scope. A variable declared with _var_ only scoped to function but variable declared with _let_ or _const_ is block scope(function block, if block, loop block, etc). Block in JavaScript is a code in between two curly brackets ({}).

In ES6 and above there is _let_ and _const_, so you will not suffer from the sneakiness of _var_. When we use _let_ our variable is block scoped and it will not infect other parts of our code.

