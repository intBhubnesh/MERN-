## Conditionals

Conditional statements are used for  make decisions based on different conditions.

- Conditional execution: a block of one or more statements will be executed if a certain expression is true

Conditions can be implementing using the following ways:

- if
- if else
- if else if else
- switch
- ternary operator


### If
In JavaScript and other programming languages the key word _if_ is to used check if a condition is true and to execute the block code.

**Example:**

```js
let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
}
//  3 is a positive number
```

### If Else
If condition is true the first block will be executed, if not the else condition will be executed.

```js
let isRaining = true
if (isRaining) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}
// You need a rain coat.
```

### If  Else if Else
 We use *else if* when we have multiple conditions.

 ```js
let a = 0
if (a > 0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
}
```

### Switch
Switch  is an alternative for **if else if else else**.
The break statement is to terminate execution so the code execution  does not go down after the condition is satisfied.  The default block runs if all the cases don't satisfy the condition.

```js
// Switch Examples
let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log('Today is Monday')
    break
  case 'tuesday':
    console.log('Today is Tuesday')
    break
  case 'wednesday':
    console.log('Today is Wednesday')
    break
  case 'thursday':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break
  default:
    console.log('It is not a week day.')
}

```

### Ternary Operators
it is shorthand of the if els statement

```js
let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
```