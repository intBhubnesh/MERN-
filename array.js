// array 
// dynamically resizable 
// strore collection of multiople dataType


// declaration

const myArray = [0,1,2,3,4,5] 


// array copy creat a shallow copy
// basically non primitive data type work on the principle of storing the reference 
// shallow copy - both the variable point to same memory space in heap
let copyArray = myArray 

copyArray[2] = 20

console.log(myArray, copyArray)


// primitive data type create deep copy 
// deep copy - both variable have there separate copy of 
const String = "hello world"
let copyString = String

copyString = "bye World"
console.log(copyString, String)


// declaration types 
// 1. litteral 
const arrLitteral = [1,2,'number']

// 2. constructor 
const arrConstructor = Array(5,4,1,'randNumber')

// 3. reference 
const arrReference = new Array(9,7,5,'oddNumber')


let cart_1 = ['biscuts', 'bread', 'milk', 'eggs']

// accesing -> using the index value 
console.log(cart_1[0])

// modify the value - mutation of the array values
cart_1[3] = 'soyabeen'

// print the array
console.log(cart_1)

let cart_2  = ['fruits', 'vegetables', 'sooji', 'maida']

// merging two array 
// 1. conscat()
let counter_1 = cart_1.concat(cart_2)

console.log(counter_1)

// 2. spread operator 
let counter_2 = [...cart_1, cart_2]

console.log(counter_2)

// 3. flat the nested array
let nestedArray = [1,2,[3,4,5],[3,9],3,0] 
let counter_3 = nestedArray.flat(Infinity)

console.log(counter_3) // [  1, 2, 3, 4, 5,3, 9, 3, 0]


const bill = [...cart_1, ...cart_2]
// methors 

// 1. join() -> convert the array into string
const list = bill.join('\n')

console.log(list)

// 2. include() -> check if a value is present in array, return a boolean value
console.log(bill.includes('eggs'))  // false
console.log(bill.includes('bread')) // true

// 3. indexOf() -> return the index of the element in array if present otherwise, reurn -1
console.log(bill.indexOf('fruits')) // 4
console.log(bill.indexOf('eggs')) // -1

// 4.lenght -> return the length of the array 
console.log(bill.length, "items") // 8 iteams

// 5. slice() -> reuturn a copy of modified array, take first index and last index 
//               first idex is inclusive and last index is exclusive 
console.log(bill.slice(0,4))
console.log(bill.slice(0)) // copy all the elements of the array 
console.log(bill.slice(0,1))
console.log(bill.slice(0,-1)) // -1 means last element 


// 6. splice() -> remove the elemts form the array
let myBag = bill.splice(0,4)
let myFriendBag = bill.splice(0)

console.log("my bag : ", myBag)
console.log("my friend's bag : ", myFriendBag)


// 7. reverse() -> reverse the array 
const arr = [ 1,4,3,'hello',6,0]

console.log(arr.reverse())

// 8. sort() -> srorth the array 
console.log(arr.sort())


// Array Object Methords 

// 1. isArray() -> check is the variable is aray or not, return a boolean value
console.log(Array.isArray(bill))  // true

// 2. from() -> make a array out of string, 
let str = 'hello' 
console.log(Array.from(str))


// 3. of() -> create a array out of passed parameters
console.log(Array.of('hello','how','are','you'))

let scooby = [1,10,2,4,3,1,9,0].sort()
console.log(scooby);