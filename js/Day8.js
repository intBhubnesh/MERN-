// Maths Object 

let x = 10
let y = new Number(10)

let obj = {
    name: "John",
    age: 30,
    city: "New York"
}

console.log(y, typeof y )

// pbject -> key
// pbject -> value 

console.log(obj.name)


let pi = Math.PI

console.log(pi)

// Math.round()
console.log(Math.round(pi))
// Math.floor()
// Math.ceil()

// Math.random() -> return a float type number 

let rand = Math.random()
console.log(rand)


// Math.abs(val)
// Math.sqrt(val)
// Math.pow(val, pow)

console.log(Math.pow(5,2)) //25

const arr = [2,4,51,8,9,0]

console.log(Math.min(...arr)) 
console.log(Math.min(2,4,51,8,9,0)) 




















// method of Math Object
// Math.PI
// Math.round()
// Math.roof()
// Math.ceil()
// Math.random()

// method 


// String Method 

let str_1 = "Hi JavaScript"
let fName = 'Bhunesh'
let lName =  new String("Maharana")
let str_4 = `Welcome, ${fName} ${lName} to JavaScript `

// concardinate 
let name_1 = fName + " " + lName // Bhubnesh Maharana

let name_2 = `${fName} ${lName}` // Bhubnesh Maharana

let name_3 = fName.concat(" ",lName) // Bhubnesh Maharana

console.table([name_1,name_2,name_3])


// what is the difference between "" and " " ? same , not the same
console.log(typeof "",typeof " ") // string , string
console.log( "" ==  " ") // false 
console.log( "" ===  " ") // false 
console.log( "" ==  null) // false 
console.log( "" ==  false) // true 
console.log( "" ===  false) // false 

if(""){
 console.log("hi js")
}
else{
 console.log("bye js")
}

// falsy values in js -> "",0,null,undefined,false 


// length property
console.log(name_1, name_1.length) // Bhubnesh Maharana , 16


// toUpperCase(), toLowerCase
console.log(name_1.toUpperCase())
console.log(name_1.toLowerCase())

// sub string -> return a sub string 
// substr(start_index, nos_of_indices) 
console.log(name_1.substr(0,7))

// substring(start_index, last_index)
let temp_fName = name_1.substring(0,7)
console.log(temp_fName, name_1)

// splite -> string into array
console.log(name_1.split(" "))
let fname = name_1.split(" ")[0]
console.log(fname)

// slice -> 
console.log(name_1.slice(0,7), name_1) // Bhunesh Bhunesh Maharana
// Assinemt : Difference substring and slice

// indexOf() -> index of the charecter
console.log(name_1)
console.log(name_1.indexOf('a'))
console.log(name_1.lastIndexOf('a'))

// include()
console.log(name_1.includes("Bhu"))


// replace()

let demo_String = "Js is fun !"
demo_String = demo_String.replace('Js','Python')
console.log(demo_String.replace('Js','Python'), demo_String)
 demo_String = "Pyhon is fun !"



// Casting 

let r = 10
r =[10,20,30]
r = {
    name: 'bhubnesh',
    age :24 
}
r = "hello"

let num = '10'


console.log(typeof num)
let input = parseInt(num)
input = Number(num)
input = +num

let string = String(input)

  console.log(input, typeof input)
  console.log(string, typeof string)

console.log(("Ba"+ +"cteri" + "a" ).toLowerCase()) // banan cteri a

console.log(++num)
const output = Math.pow(num,2) // output = num ** 2
console.log(output)


console.log(NaN == null)  // false
console.log(undefined == null) //true -> value  
// undefined - default value assigned by compiler 
let un 
console.log(un)
let f = 10
let g = 10

console.log(f==g) // true 

// null - developer assign the value to a variable 
let nu = null
console.log(nu)

console.log(typeof undefined,typeof null)

console.log(undefined === null) //false  -> type 

let j = NaN
let k = NaN

console.log(j==k) // false 
console.log(typeof NaN)
console.log(NaN == NaN) //false  

/*
console.log(null == null) //true  


// Operators

// Arithmetic Operators
// Logical Operators
// Comparison Operators
// Assignment Operators
// Increment/Decrement Operators

// window Object methods

// Conditional Statements

//Data Object

// loop
*/