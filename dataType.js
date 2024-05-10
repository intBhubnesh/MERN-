// every browser have there own version of js, ecma script was created
// it was adopted as the standard javascript

let word = "hello";
word[1] = "r";

console.log(word); // hello - string is immutable

const firstName = "Bhubnesh";
const lastName = "Maharana";

let name = firstName + " " + lastName;

console.log(name);

const sub_string_1 = name.substr(9,8)
const sub_string_2 = name.substring(9,)

console.table([sub_string_1,sub_string_2])
console.log(name.split(" "))

let string = 'JavaScript'
a
console.log(string.includes('Java')) // True 
console.log(string.includes('java')) // False


console.log(string.indexOf('J')) // a
console.log(string.indexOf('a')) // a
console.log(string.indexOf('java')) // a


console.log(firstName.concat(lastName)) 

// alert(), promt(),    ()

// alert("hello world")
// prompt("Fuck You")
// confirm("Are u a cat ?")


let str = new Date()

console.log(str.getDate())



let arr_1 = [1,2,3,4,5]
let arr_2 = ['a','b','c','d','e']

for( const num of arr_1){
    console.log(num + " ")
    for(const letter of arr_2){
        if(letter == 'd') break
        console.log(letter)
        
    }
}