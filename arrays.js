// Array -> Object
// dynnamic 
// store multiple datatypes 
// index based ( 0-base )



// types of decalaration
// 1. constructor
let obj_1 = Array()

// 2. reference objects
let obj_2 = new Array()

// 3. litteral 
let obje_3 = []

let myCart = ['buiscuits', 'bread', 'milk','eggs']

// access 
console.log(myCart[2])

// modification 
myCart[3] = 'butter'
 
let myFriendCart = ['fruits', 'vegetables', 'nuts', 'protien bars', 'shake']



// methord 

// 1. include() -> return boolean valus
console.log(myCart.includes("milk")) // true
console.log(myCart.includes("eggs")) // false


// 2. indexOf() -> 
console.log(myCart.indexOf("milk")) // 2
console.log(myCart.indexOf("eggs")) // -1


// 3. length 
console.log(myCart.length) // 4
console.log(myFriendCart.length) // 5


// merge array
// let cart = [myCart, myFriendCart]
// console.log(cart) 

// 1. concat()
// let cart = myCart.concat(myFriendCart)
// console.log(cart)

// 2. ...spread operator
let cart = [...myCart, ...myFriendCart]
console.log(cart)


// join() 
console.log(cart.join("\n"))


// slice()
console.log(cart.slice(2,5)) // [ 'milk', 'eggs', 'butter' ]
console.log(cart.slice(0)) // all elemets
console.log(cart.slice(0,-1)) // all elemet
console.log(cart) 

// splice()
let myBag = cart.splice(0,4, 'cookies')
console.log(myBag) // [ 'buiscuits', 'bread', 'milk', 'eggs' ]

console.log(cart) // [ 'fruits', 'vegetables', 'nuts', 'protien bars', 'shake' ]

let firendsBag = cart.splice(0)
console.log(firendsBag) // [ 'fruits', 'vegetables', 'nuts', 'protien bars', 'shake' ]



// push() -> add element at the end
myBag.push('dahi vaada')

console.log(myBag) // [ 'dahi vaada' ]

// pop() -> remove element from the end
let plate = myBag.pop()
console.log(plate) // dahi vaada
console.log(myBag) // [ 'buiscuits', 'bread', 'milk', 'butter' ]

let blowel = myBag.splice(2,1)
console.log(blowel) // [ 'milk']


// shift() -> remove element from the start
// unshift() -> add element at the start

// reverse()
let arr = [1,4,5,9,23,15,0,'hello',true,null,undefined]
arr.reverse()
console.log(arr) // [ 'butter', 'bread', 'buiscuits' ]

// sort()
arr.sort()
console.log(arr) // [ 0, 1, 15, 23, 4, 5, 9, 'hello', true, null, undefined ]


// Array methords 
// 1. isArray()
let str = "hello"
console.log(Array.isArray(arr)) // true
console.log(Array.isArray(str)) // false

// 2. of()
let arr_3 = Array.of(1,2,'bhubnesh',4,true)w
console.log(arr_3) // [ 1, 2, 'bhubnesh', 4, true ]

// 3. from()
let arr_4 = Array.from('hello')
console.log(arr_4) // [ 'h', 'e', 'l', 'l', 'o' ]