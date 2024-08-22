// // Array.prototype.concat() - non static 
// const list_1 = [1,2,3,4]
// const list_2 = [5,6,7]

// list_1.concat(list_2)
// // variable.methord(_para_)



// // Array.isArray() - static 
// Array.isArray(list_1)
// // Object.static_methord(_para_)

// // const Array {

    
// // }


// function name(params) {
//     // code 

//     return

// }


function hello(name){
    console.log("welcome to js function class " + name)

}


hello("bhubnesh")

const language = function(name){
    console.log("welcome to js function class " + name)
}

language("sumitra")


const members = (name) => {
    console.log("memeber 1 : " + name)
}

members("shivapranya")


const list_1 = [1,2,3,4]

// 1. square each element of the list
for(let i=0; i<list_1.length ; i++){
    // square the element of the list
    list_1[i] *= list_1[i]

    // print the elemt of the list 
    console.log(list_1[i])
}

list_1.forEach((i) => {
        // square the element of the list
        i *= i

        // print the elemt of the list 
        console.log(i)
})

// 2. print each elemet of the list 




// sumitra 

// creat a bag array 
// call the forEach loop on the bag and print the iteam in 
//  in this order 
    // i 
    //  iteam 1 : bread
    //  iteam 2 : milk 

// shivapranya
    // crat a number array 
    // segregate the numbers into odd array and even array 
    // print the odd and even numbers 