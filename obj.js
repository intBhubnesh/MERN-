class vehicle {
  constructor() {
    this.type = "car";
  }
  start() {
    return `Starting: ${this.type}`;
  }
  static getClassName() {
    return "Vehicle";
  }
}

const nano = new vehicle();
console.log(nano.start()); // car
console.log(vehicle.getClassName()); // Vehicle
// console.log(nano.getClassName()); // TypeError: nano.getClassName is not a function

Declaration
let obj1 = {}; // object literal
let obj2 = Object(); // object constructor

const sym = Symbol(); // TypeError: Symbol is not a constructor

let arr = [1,23,4,45,6,0]
arr[0]

obj2 = {
  name: "John",
  age: 30,
  city: "New York",
  "address" : "BBRS Odisha",
   // [sym_1] : "Symbol" ,
 [sym]: "Symbol",

};

// access the object properties
console.log(obj2.name); // John
// console.log(obj2[name]) // ReferenceError: name is not defined
console.log(obj2['name']) // ReferenceError: name is not defined
console.log(typeof obj2.name); // string
console.log(typeof obj2.age); // number
// console.log(obj2.sym_1) // undefined
console.log(obj2[sym]) // Symbol
console.log(obj2.address) // BBRS Odisha

// updation properties in object
obj2.city = "San Francisco";
console.log(obj2.city); // San Francisco

Object.freeze(obj2);

obj2.city = "Los Angeles";
console.log(obj2.city); // San Francisco

// how to methords in the object 
let user = {}
 user.name = "Bhubnesh";
 
 user.greeting = function() {
    return `Welocme to JavaScript`;
     }

     console.log(user) // { name: 'Bhubnesh', greeting: [Function] }
     console.log(user.greeting()) // Welocme to JavaScript
     console.log(user.greeting) // [Function: greeting]

let name = "global object"
 user.userBalance = 0
 //user.displayBalance = () => `${user.name} balance is ${this.userBalance}`
 user.displayBalance = function() {
 return `${user.name} balance is ${this.userBalance}`
 } 

console.log(user)
 console.log(user.displayBalance()) // global object balance is 0

// merger two object
let user1 = {
    name: "Bhubnesh",
    age: 30
}
let user1_AccountDetails ={
    type : "Joint",
    balance : 1000,
    accID : "123abc"
}

// let mergeUser = Object.assign(user1, user1_AccountDetails)
 let mergeUser = Object.assign({}, user1, user1_AccountDetails)
console.log(mergeUser) // { name: 'Bhubnesh', age: 30, type: 'Joint', balance: 1000, accID: '123abc' }
Object.assign(user1, user1_AccountDetails)
console.log(user1) // { name: 'Bhubnesh', age: 30, type: 'Joint', balance: 1000, accID: '123abc' }

// ... - spread operator
let mergeUser_2 = {...user1, ...user1_AccountDetails}
console.log(mergeUser_2) // { name: 'Bhubnesh', age: 30, type: 'Joint', balance: 1000, accID: '123abc' }


// Object.keys() - returns an array of a given object's own enumerable property names

const key = Object.keys(user1)
console.log(key) // [ 'name', 'age', 'type', 'balance', 'accID' ]

// Object.values() - returns an array of a given object's own enumerable property values
const value = Object.values(user1)
console.log(value) // [ 'Bhubnesh', 30, 'Joint', 1000, '123abc' ]

// Object.entries() - returns an array of a given object's own enumerable string-keyed property [key, value] pairs 
const entries = Object.entries(user1)
console.log(entries) // [ [ 'name', 'Bhubnesh' ], [ 'age', 30 ], [ 'type', 'Joint' ], [ 'balance', 1000 ], [ 'accID', '123abc' ] ]

// Object.hasOwnProperty() - returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it)

console.log(user1.hasOwnProperty('isLoggedIn')) // false
console.log(user1.hasOwnProperty('name')) // true


// nest object
let Name = {
    name: "Bhubnesh",
    age: 30,
    // address :   {
    //     city: "Bhubaneswar",
    //     state: "Odisha",
    //     country: "India"
    
    // }
}
let address = {
    city: "Bhubaneswar",
    state: "Odisha",
    country: "India"
}
Name.address = address 

console.log(Name)

console.log(Name.address.city) // Bhubaneswar
console.log(Name.address.state) // Odisha