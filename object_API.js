// deconstructing the object

let user = {
  userName: "Rahul",
  email: "rahul@google.com",
  phoneNo: "9923831913",
  job: "Assistant teacher",
  married: false,
};

// let {key : value, key2 : value2, ... } = object
let { userName: name } = user;
// after deconstructing the object we can use it as a variable
name = "Rahul Yadav";

console.log(name); // Rahul Yadav

// example 2
// we can can dereference the same variable multiple times with different names
let { userName: n, email: mail } = user;
console.log(n); // Rahul

// JSON -> request and response from the server is in JSON format, we need to convert it into the object to use it in the program
// JSON is a lightweight data interchange format
{
    
        userName: "Rahul",
        email: "rahul@gmail.com",
        phoneNo: "9923831913",
        job: "Assistant teacher",
        married: false,

}

// JSON looks similar to the object but it is not the same as the object

// JSON in array format

[
    {
        userName: "Rahul",
        email: "rahul@gmail.com",
        phoneNo: "9923831913",
        job: "Assistant teacher",
        married: false,
    }
    {
        userName: "Bhubnesh",
        email: "bhubnesh@gmail.com",
        phoneNo: "9923831913",
        job: "Assistant teacher",
        married: false,
    }
    {
        userName: "Mohit",
        email: "mohit@gmail.com",
        phoneNo: "9923831913",
        job: " Deveolper",
        married: false,
    }
]