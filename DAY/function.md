## Functions

A function is a reusable block of code or programming statements designed to perform a certain task.

Function makes code:

- clean and easy to read
- reusable
- easy to test

A function can be declared or created in couple of ways:

- _Declaration function_
- _Expression function_
- _Anonymous function_
- _Arrow function_

### Function Declaration

```js
//declaring a function
function functionName() {
  // code goes here
}
functionName(); // calling function by its name and with parentheses
```

### Function without a parameter and return

If a function does not return values the value of the function is undefined

```js
// function without parameter,  a function which make a number square
function square() {
  let num = 2;
  let sq = num * num;
  console.log(sq);
}

// calling the function
square(); // 4
console.log(square()); // undefined
```

### Function with returning value

```js
function printFullName() {
  let firstName = "Bhubnesh";
  let lastName = "Maharana";
  let fullName = ` ${firstName} ${lastName}`;
  return fullName;
}
console.log(printFullName()); // Bhubnesh Maharana
```

### Function with a parameter

#### Function with single parameters

```js
// function with one parameter
function functionName(parm1) {
  //code goes her
}
functionName(parm1); // during calling or invoking one argument needed
```

#### Function with many parameters

```js
// function with multiple parameters
function functionName(parm1, parm2, parm3,...){
  //code goes here
}
functionName(parm1,parm2,parm3,...) // during calling or invoking three arguments needed
```

#### Function overloading

A function declaration provides a function scoped arguments array like object. Any thing we passed as argument in the function can be accessed from arguments object inside the functions. Let us see an example

```js
// Let us access the arguments object
​
function sumAllNums() {
 console.log(arguments)
}

sumAllNums(1, 2, 3, 4)
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

```

### Anonymous Function

An anonymous function is a function without a name. It's defined using the function keyword followed by parameters (if any) and a function body. Since it lacks a name, it can't be called directly. Instead, it's usually assigned to a variable or used as a callback function(function passed as argument to other function) .

```js
const anonymousFun = function () {
  console.log(
    "I am an anonymous function and my value is stored in anonymousFun"
  );
};
```

### Expression Function

A function expression is any valid JavaScript function where the function is assigned to a variable. This means that a function expression can be either named or anonymous.

```js
// a regular function expression
const multiply = function multiply(x, y) {
  return x * y;
};

console.log(multiply(4, 6)); // Outputs: 24
```

```js
//  an anonymous function expression
const divide = function (x, y) {
  return x / y;
};

console.log(divide(10, 2)); // Outputs: 5
```

### Self Invoking Functions

Self invoking functions are anonymous functions which do not need to be called to return a value.

```js
(function (n) {
  console.log(n * n);
})(2); // 4, but instead of just printing if we want to return and store the data, we do as shown below

let squaredNum = (function (n) {
  return n * n;
})(10);

console.log(squaredNum); // 100
```

### Arrow Function

Arrow function uses arrow instead of the keyword _function_ to declare a function. Let us see both function declaration and arrow function.

Return statement:

Normal Function:
Requires a return statement to return a value.
Arrow Function:
If the function body consists of a single expression, it is implicitly returned without needing a return statement.
Function name:

Normal Function:
Has a function name property that can be accessed via functionName.name.
Arrow Function:
Does not have a name property.


```js
// This is how we write normal or declaration function
// Let us change this declaration function to an arrow function
function square(n) {
  return n * n
}

console.log(square(2)) // 4

const square = n => {
  return n * n
}

console.log(square(2))  // -> 4

// if we have only one line in the code block, it can be written as follows, implicitly return
const square = n => n * n  // -> 4
```

#### Unlimited number of parameters in arrow function

 Arrow function does not have the function scoped arguments object. To implement a function which takes unlimited number of arguments in an arrow function we use spread operator followed by any parameter name.  Any thing we passed as argument in the function can be accessed as array in the arrow function. Let us see an example

 ```js
// Let us access the arguments object
​
const sumAllNums = (...args) => {
  // console.log(arguments), arguments object not found in arrow function
  // instead we use a parameter followed by spread operator (...)
  console.log(args)
}

sumAllNums(1, 2, 3, 4)
// [1, 2, 3, 4]

```



### Function with default parameters

Sometimes we pass default values to parameters, when we invoke the function if we do not pass an argument the default value will be used. Both function declaration and arrow function can have a default value or values.

```js
// syntax for normal function 
// Declaring a function
function functionName(param = value) {
  //codes
}
// Calling function
functionName()
functionName(arg)
```


**Example:**
```js
function calculateAge(birthYear, currentYear = 2019) {
  let age = currentYear - birthYear
  return age
}

console.log('Age: ', calculateAge(1819))
```


```js
// syntax
// Declaring a function
const functionName = (param = value) => {
  //codes
}

// Calling function
functionName()
functionName(arg)
```

**Example:**
```js

const calculateAge = (birthYear, currentYear = 2019) => currentYear - birthYear
console.log('Age: ', calculateAge(1819))
```

