## Window Methods

### Window alert() method

As you have seen at very beginning alert() method displays an alert box with a specified message and an OK button. It is a builtin method and it takes on argument.


```js
alert(message)
```

### Window prompt() method

The window prompt methods display a prompt box with an input on your browser to take input values and the input data can be stored in a variable.
return the input of the user

```js
prompt('required text', 'optional text')
```

### Window confirm() method

The confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button.
A confirm box is often used to ask permission from a user to execute something.
return bloolean value.

```js
const agree = confirm('Are you sure you like to delete? ')
console.log(agree) // result will be true or false based on what you click on the dialog box
```

