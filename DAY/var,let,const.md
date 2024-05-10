## Let, var and const
These three are the keywords used for declaration of a variable 
So 'let' and 'const' are introduced in ES6 before that 'var' was the only way to declare a variable

![var is god](https://res.cloudinary.com/practicaldev/image/fetch/s--NmWA3zN---/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/800/0%2A3GjWzYVaEqoQJivk.jpg)


Thse declaratives are diffeneciated on the basic of there functionality in different aspects 
i.  Global Scope {
    var city = "vadodra"
}
ii. Function Scope 
iii.Declaration and Redclaration 

![comparision between let,var,const](https://miro.medium.com/v2/resize:fit:720/format:webp/0*mYuuRwjUfUOAdHpo.jpg)


### var 
so var can be scopes globally, functionally/locally (we will see the diffrence between local and functional in a bit)


#### global and block scope 

global : the variable that are not declared within any block 
local/functional  : variable decalred within any function 

```js

var name = "Bhubnehs" // globally scoped
var age = "24" // globally scoped 

function printDetails(){
    var city = "Bhubaneswar" // locally scoped 
    console.log(`${name}'s age is ${age}, he lives in ${city}.`)
    // we can access the globar variable throughout the code 
}

console.log(city) // ReferenceError: city is not defined
// we cant access the functionally/locally scoped variable 

```

#### Updation and Redeclaration in var 
```js

var name = "Bhubnesh"
var city = "Bhubneswar"

city = "Vadodara" // var updation
var name = "Dinesh" // var redeclaration
```

#### Hoisting
so the var decalared variable are hosted to the top and intiallised to undefined 

```js
console.log(num) // undefined 
// num is being used before it has been declared
num = 10 

```


#### Problem 
usage of var in small code where one know which varible need to be reassigned is good, but when working with a large code base the var is avoided as it might cause lots of bugs.

[Wise Bird Says](https://miro.medium.com/v2/resize:fit:640/format:webp/0*gDJ9X5LjUj-TczAj)


### let and const 
variable declared using these keywords are block scoped 

#### block scope 
now the question arise what is block scope ?
block scope : varible declared within {} . i.e. {} - block 

what is the diffenence between block scope and functional/local scope 

functional scope : these vareable are accessible throughout the function, also in other functions

block scope : these varible are accessible only within that block only 

```js
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

function letSum(){
    let num1 = 1 
    let num2 = 2 

    if(num1>num2){
      let num = num1-num2
    }
    else{
      let  num = num2-num1
    }

    console.log(num) // ReferenceError: num is not defined
    console.log(num3) // 1
    // we can access the functionally scoped variable in
}

console.log(num3) // ReferenceError: num3 is not defined
varSum()
letSum()

```

#### Updation and Redeclaration of var and const 

```js

const empID = 231
let name = "Bhubnesh"

empID = 000 // TypeError: Assignment to constant variable.
name = "Bhubnesh Maharana"

const empID = 431 // SyntaxError: Identifier 'empID' has already been declared b
let name = "Disnesh" // SyntaxError: Identifier 'name' has already been declared

```

#### Hosting 
variable declared using let and cosnt are hoisted to the top of the scope but are intiallised unlike var 
```js 
console.log(num) // ReferenceError: Cannot access 'num2' before initialization

let num = 10 
```

### Conclusion

var:function-scoped and can be updated and redeclared.

let : block-scoped, can be updated, but cannot be redeclared.

const : block-scoped, cannot be updated and redeclared.

