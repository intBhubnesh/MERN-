### Spread or Rest Operator

When we destructure an array we use the spread operator(...) to get the rest elements as array. In addition to that we use spread operator to spread array elements to another array.

### Spread operator to get the rest of array elements
```js
const countries = [
  'Germany',
  'France',
  'Belgium',
  'Finland',
  'Sweden',
  'Norway',
  'Denmark',
  'Iceland'
]

let [gem, fra, , ...nordicCountries] = countries

console.log(gem)
console.log(fra)
console.log(nordicCountries)
```

```sh
Germany
France
["Finland", "Sweden", "Norway", "Denmark", "Iceland"]
```

### Spread operator to copy array
```js
const frontEnd = ['HTML', 'CSS', 'JS', 'React']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = [...frontEnd, ...backEnd]

console.log(fullStack)
```

```sh
["HTML", "CSS", "JS", "React", "Node", "Express", "MongoDB"]
```

### Spread operator to copy object
```js
const userDetails{
    name : "Bhubnesh",
    age : 24,
    marraige : false,
    job : "tutor"
}

const bankDetails{
    bal : 234551,
    loan : 0,
    acc_type : "saving"
}

const userBankDetails = {...userDetails, ...bankDetails}
console.log(userBankDetails)
```
```sh
{
    name : "Bhubnesh",
    age : 24,
    marraige : false,
    job : "tutor",
    bal : 234551,
    loan : 0,
    acc_type : "saving"
}
```

#### Spread operator with arrow function
Whenever we like to write an arrow function which takes unlimited number of arguments we use a spread operator. If we use a spread operator as a parameter, the argument passed when we invoke a function will change to an array.

```js

const sumAllNums = (...args) => {
  console.log(args)
}

sumAllNums(1, 2, 3, 4, 5)

```

```sh
[1, 2, 3, 4, 5]

```

