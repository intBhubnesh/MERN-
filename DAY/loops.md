## Loops

repeated execution of a block of code 

### for Loop

```js
// For loop structure
for(initialization, condition, updation){
  // code goes here
}
```

### while loop

```js
//While loop structure
initiallisation
while (condition) {
  // code goes here 
  updation
}
```

### do while loop

```js
initialisation
do {
  // code goes here
  updation
} while (condition)

```

### for of loop

```js
for (const element of arr) {
  // code goes here
}
```


## Loop control Satatements

### break

Break is used to interrupt a loop.

```js
for(let i = 0; i <= 5; i++){
  if(i == 3){
    break
  }
  console.log(i)
}

// 0 1 2
```

### continue

We use the keyword *continue* to skip a certain iterations. 

```js
for(let i = 0; i <= 5; i++){
  if(i == 3){
    continue
  }
  console.log(i)
}

// 0 1 2 4 5
```
