## 📔 Object

Everything can be an object and objects do have properties and properties have values, so an object is a key value pair.

### Creating an empty object

An empty object

```js
const person = {}; // object litteral
const people = new Object(); // Singlet object
```

Conceptually, undefined indicates the absence of a value, while null indicates the absence of an object

### Creating an objecting with values

The value of properties or keys could be a string, number, boolean, an object, null, undefined or a function.

```js
let user = {
  first_name: "bhubnesh",
  last_name: "maharana",
  age: 23,
  class: [1, 2, 3, 4, 5],
  isLoggedIn: false,
  isEmpty: null,
  0: "hello Js ",
  mySymbol: "This is a string", // this a string
  //  [sym] : "JavaScript Intermediate" -> this will throw a error saying "Sym not defined"
  [mySymbol]: "This is a symbol", // symbol need to be declared before it is used in object
};
console.log(user);
```

### Getting values from an object

We can access values of object using two methods:

- using . followed by key name if the key-name is a one word

```js
// 1. using the key
console.log(obj_2.first_name);
console.log(typeof obj_2.first_name); // string
console.log(typeof obj_2.age); // number
```

- using square bracket and a quote

```js
// accessing string
console.log(obj_2["last_name"]); // name is stored as string

// accessing number
console.log(obj_2[0]); // so 0 is stored as number

// accessing symbol
console.log(obj_2[mySymbol]); //here we are accessing the symbol
console.log(obj_2["mySymbol"]); // here it is a string
```

### Creating object methods

The _this_ key word refers to the object itself. We can use the word _this_ to access the values of different properties of the object. We can not use an arrow function as object method because the word this refers to the window inside an arrow function instead of the object itself.

```js
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

console.log(person.getFullName());
// Bhubnesh Maharana
```

### Setting new key for an object

An object is a mutable data structure and we can modify the content of an object after it gets created.

```js
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
console.log(person);
console.log(person.getPersonInfo());
```

```sh
Bhubnesh Maharana is a teacher.
He lives in Finland.
He teaches HTML, CSS, JavaScript, React, Node, MongoDB, Python, D3.js, Meteor, and SasS.
```

### Object Methods

There are different methods to manipulate an object. Let us see some of the available methods.

#### Making the object immutable using Object.freeze()

```js
Object.freeze(person);

person.isMarried = true;

console.log(person.isMarried); // false
```

#### copy an object from source to target using the Object.assign()

```js
const obj_1 = {
  name: "Object 1",
  type: "object",
  id: 0,
};
const obj_2 = {
  name: "Object 1",
  type: "object",
  id: 1,
};

let objectList_1 = Object.assign({}, obj_1, obj_2);
// or
let objectList_2 = { ...obj_1, ...obj_2 };

console.log(objectList_1);
```

```sh
{
    name : "Object 1",
    type : "object",
    id : 0,
    name : "Object 1",
    type : "object",
    id : 1
}
```

#### Getting object keys using Object.keys()

_Object.keys_: To get the keys or properties of an object as an array

```js
const keys = Object.keys(person);
console.log(keys);
//  [
//   'firstName',     'lastName',
//   'age',           'country',
//   'city',          'skills',
//   'getFullName',   'nationality',
//   'title',         'isMarried',
//   'getPersonInfo'
// ]
```

#### Getting object values using Object.values()

_Object.values_:To get values of an object as an array

```js
const values = Object.values(person);
console.log(values);
// [
//   'Bhubnesh',
//   'Maharana',
//   24,
//   'India',
//   'Bhubneshwar',
//   [
//     'HTML',       'CSS',
//     'JavaScript', 'React',
//     'Node',       'MongoDB',
//     'Python',     'D3.js',
//     'Figma',      'Premier Pro'
//   ],
//   [Function: getFullName],
//   'Indian',
//   'teacher',
//   false,
//   [Function (anonymous)]
// ]
```

#### Getting object keys and values using Object.entries()

_Object.entries_:To get the keys and values in an array

```js
const entries = Object.entries(person);
console.log(entries);
// [
//   [ 'firstName', 'Bhubnesh' ],
//   [ 'lastName', 'Maharana' ],
//   [ 'age', 24 ],
//   [ 'country', 'India' ],
//   [ 'city', 'Bhubneshwar' ],
//   [
//     'skills',
//     [
//       'HTML',       'CSS',
//       'JavaScript', 'React',
//       'Node',       'MongoDB',
//       'Python',     'D3.js',
//       'Figma',      'Premier Pro'
//     ]
//   ],
//   [ 'getFullName', [Function: getFullName] ],
//   [ 'nationality', 'Indian' ],
//   [ 'title', 'teacher' ],
//   [ 'isMarried', false ],
//   [ 'getPersonInfo', [Function (anonymous)] ]
// ]
```

#### Checking properties using hasOwnProperty()

_hasOwnProperty_: To check if a specific key or property exist in an object

```js
console.log(person.hasOwnProperty("firstName")); // true
console.log(person.hasOwnProperty("isLoggedIn")); // false
```
