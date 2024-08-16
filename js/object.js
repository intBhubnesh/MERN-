// what is the difference between the object declared using new and without new 

// when we use constructor to declare a variable then its singleton
let obj_1 = new Object()
let mySymbol = Symbol() // declaring a symbol

// when we declare the object as literal then its not a literal 
let obj_2 = {
    first_name: "bhubnesh",
    "last_name" : "maharana",
    age : 23,
    class : [1,2,3,4,5],
    isLoggedIn : false,
    isEmpty : null,
    0 : "hello Js ",
    mySymbol : "This is a string",  // this a string 
    //  [sym] : "JavaScript Intermediate" -> this will throw a error saying "Sym not defined"
    [mySymbol] : "This is a symbol" // symbol need to be declared before it is used in object

}
//NOTE
// here if don't give any expression(value) to isEmpty the it will show error 
// we must use the null here, which make a use case for null 
console.log(obj_2.isEmpty)

// keys in the the object are stored as string and these are mapped to the index of the object
// Conclusion : we can access the value 
// 1. using the key 
console.log(obj_2.first_name)
console.log(typeof obj_2.first_name) // string
console.log(typeof obj_2.age) // number 

// 2. using the key indexing - used key string 
// console.log(obj_2[name]) // this will throw error saying name not defined
// this error occurs due to the fact keys are stored as string 


// is key is declared as string , number or symbol they we have to use indexing to access the value 
//as method 1 doesn't work here 

// accessing string
console.log(obj_2["last_name"]) // name is stored as string

// accessing number 
console.log(obj_2[0]) // so 0 is stored as number 

// accessing symbol
console.log(obj_2[mySymbol]) //here we are accessing the symbol
console.log(obj_2['mySymbol']) // here it is a string 


// mutating the value of the objects 
obj_2.isLoggedIn = true  // updating the properties of the object 
console.log(obj_2.isLoggedIn)

// how to make to make the object properties immutable 
// usr the freeze method of the Object Class 
Object.freeze(obj_2) // pass the object as argument which you want to make the freezed
obj_2.isLoggedIn = false 

console.log(obj_2.isLoggedIn) // true - it remain unchanged 

// Now lets create a new object as owr old object is freezed
let user = new Object()

// adding new properties(variables) and  methods(functions)
user.userName = "Bhubnesh"

// functions in the object 
user.Greeting = function(){
    return 'welcome to JS'
}

user.userBalance = 0

userName = "Global Object "
user.displayBalance = function(){
    //ReferenceError: userName are not defined
    //return `${userName} your balance is ${userBalance}`
    return `${userName} your balance is ${this.userBalance}` // Global Object  your balance is 0
    // here by default function search in global scope for the variable values 
    // "this" key world is used to tell the function which scope it should search for the variables 
}


console.log(user.displayBalance) // [Function (anonymous)] -> we are just printing the reference of the function
console.log(user.displayBalance()) // Global Object  your balance is 0

// "this" keyword used tell function to search the parent scope for the variable 

// nesting the object 

user.jointAccount = {
    accHolder : 'Bhubnesh Maharana',
    accID : '12abc',
    accType : 'Joint'
}

console.log(user)

// accessing the nested object properties 
// object scoping 
console.log(user.jointAccount.accHolder)


// object concatenation 

// i have a separate object which i need to merge with the original object 
const userDetails = {
    userID : '123abc',
    address : "BBRS Orissa",
    phoneNo : '9923831913',
    job : 'Assistant teacher',
    married : false 
}

// 1. assign() method of Object class 
// assign(target_obj, obj_1,obj_2,...) -> it don't modify the original object 
//but, return the modified object so we need to store them in the user object
user = Object.assign(user, userDetails)

console.log(user) // access all the values of the userDetail object  


// 2. spread operator(...) -> this is updated syntax for the object concatenation 
let testObject = new Object() 
testObject = {...user}

 console.log(testObject)

// example 2 
let object_1 = {
    name : "object",
    age : 12
}

const name =  Symbol()
let object_2 = {
    [name]: "object",
    method : function(){
        return "hello world"
    }
}

const object_3 = {...object_1,...object_2}

var text = 'String'
// console.log(object_3)

// methods of Object class
// keys() - static method of the Object class, Return a array of keys in the object 
console.log(Object.keys(user)) // keys() is a static function of Object class  
// console.log(user.keys()) // static function can only be accessed by the class 


// values() - static method of the Object class, Return a array of values in the object 
console.log(Object.values(user))

// entries() - static method of the Object class, Return a array of key-value pair in the object
console.log(Object.entries(user))

// hasOwnProperty() - method of the Object class, Return a boolean value if the key is present in the object    
console.log(user.hasOwnProperty('userName')) // true



const person = {
    firstName: "Bhubnesh",
    lastName: "Maharana",
    age: 24,
    country: "India",
    city: "Bhubneshwar",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node",
      "MongoDB",
      "Python",
      "D3.js",
    ],
    getFullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
  };
  person.nationality = "Indian";
  person.title = "teacher";
  person.skills.push("Figma");
  person.skills.push("Premier Pro");
  person.isMarried = false;
  
  person.getPersonInfo = function () {
    let skillsWithoutLastSkill = this.skills
      .splice(0, this.skills.length - 1)
      .join(", ");
    let lastSkill = this.skills.splice(this.skills.length - 1)[0];
  
    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
    let fullName = this.getFullName();
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`;
    return statement;
  };

  const e = Object.entries(person)
  console.log(e)