// using this in object 
userDetails = {
    name : "Bhubnesh Maharana",
    age : 24,
    isLoggedIn : false,
    gmail : "bhubnesh@availmentor.com",
    welcome : function(){
        return `Welcome ${this.name}`
        // here this bind to the current context or object which is calling this function 
    },
    details : () => `${name} is ${this.age} years old.` //  ReferenceError: name is not defined
}

r1 = userDetails.welcome()
console.log(r1)
console.log(this) // {} - the global context in case of node is empty 
                  // window object - is the global context in the case of the browser 
// r2 = userDetails.details()
// console.log(r2);

// using this in function 
let globalVariable = 20 
function thisScope(){
    let localVariable = 10 
    console.log(this); 
    console.log(this.localVariable); // undefined 
    // both the name and this are in same context thus it is undefined 
}

thisScope() // here this binding doesn't work as expected 


// arrow function 
// explicite Return 
let returnValue = () => {
    return `something`
    // {} - need to use return key word -> ecplicit return 
}

// IMplicite return 
returnValue = () => (`something`)
                    // () - implicite return no need to use return keyword 
returnValue = () => ({name : "bhubnesh"})



// closure 
// def : A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
function outerFunction(){
    let outerVariable = 10 
    function innerFunction(){
        let innerVariable = 20 
        console.log(outerVariable)
        console.log(innerVariable)
    }
    return innerFunction
}
outerFunction()() // 10,20

function one(){
    function two(){
        var b = 10 
    }
    two()
    function three(){
        console.log(b) // 10 
        // here b is accessible because of closure 
    }
    console.log(b) // ReferenceError: b is not defined

}
one()


// Hoisting 

addOne(10) // 11
// The function declaration are hoisted to the top of the file
function addOne(num){
    return num +1 
}

addTwo(10) // TypeError: addTwo is not a function   
// In this case the variable is declared but not intiallised thus it is not a function
const addTwo = function(num){
    return num + 2
}


// IIFE - Immediately Invoked Function Expression
// use case : when sometime we need establish the dataase connection or some other connection
// Protect the global namespace from polution 

let UserName = "Bhubnesh"
console.log(UserName) // Bhubnesh
// here the UserName remains in the memory until the end of the program which cause :
// 1. memory leak   
// 2. polution of global namespace
// 3. security issue
// 4. naming conflict

(function(){
    let UserName = "Maharana"
    console.log(UserName) // Maharana
}   )() 
// here the UserName is only available in the function scope and garbage collected after the function execution


// named IIFE
(function user(){
    let name = "Bhubnesh"
    console.log(name)
})()

// IIFE with return value
let output = (() => `this is a IIFE returns`)()
console.log(output)





/// Git 

// git init - to initialize the git repository
// git status - to check the status of the git repository
// git add . - to add all the files to the staging area
// git commit -m "message" - to commit the changes to the local repository
// git log - to check the logs of the commit
// git remote add origin <url> - to add the remote repository
// git push origin master - to push the changes to the remote repository

// git clone <url> - to clone the remote repository



// Html 
// head - meta, title, link, style, script 
// body - div, span, h1, h2, h3, h4, h5, h6, p, a, img, ul, ol, li, table, tr, td, th, form, input, button, select, option, textarea, label, iframe, audio, video, canvas, svg, nav, header, footer, section, article, aside, main, figure, figcaption, details, summary, dialog, progress, meter, time, mark, code, pre, samp, kbd, var, cite, q, blockquote, abbr, address, b, i, u, s, small, strong, em, sub, sup, ins, del, hr, br, wbr, bdo, ruby, rt, rp, span, div, style, script, noscript, template, slot, caption, col, colgroup, thead, tbody, tfoot, tr, td, th, a, em, strong, small, s, cite, q, dfn, abbr, data, time, code, var, samp, kbd, sub, sup, i, b, u, mark, bdi, bdo, span, br, wbr, ins, del, del, s, u, small, big, strike, tt, code, kbd, samp, var, dfn, cite, abbr, acronym, q, sub, sup, span, b, i, u, s, strike, big, small, em, strong, dfn, code, samp, kbd, var, cite, abbr, acronym, q, sub, sup, span, b, i, u, s, strike, big, small, em, strong, dfn, code, samp, kbd, var, cite, abbr, acronym, q, sub, sup, span, b, i, u, s, strike, big, small, em, strong, dfn, code, samp, kbd, var, cite, abbr, acronym, q, sub, sup, span, b, i, u, s, strike, big, small, em, strong, dfn, code, samp, kbd, var, cite, abbr, acronym, q, sub, sup, span, b, i, u, s, strike, big, small, em, strong, dfn,

// js 





let n =  10
const str = "welcome to js lecture "
