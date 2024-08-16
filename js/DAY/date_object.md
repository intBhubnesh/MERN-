
## Date Object

Time is an important thing. We like to know the time a certain activity or event. In JavaScript current time and date is created using JavaScript Date Object.

### Creating a time object

Once we create time object. The time object will provide information about time. Let us create a time object

```js
const now = new Date()
console.log(now) // 2024-03-05T16:00:07.873Z (Indian Standard Time)
```

### Getting full year

Let's extract or get the full year from a time object.

```js
const now = new Date()
console.log(now.getFullYear()) // 2024
```

### Getting month

Let's extract or get the month from a time object.

```js
const now = new Date()
console.log(now.getMonth()) // 2, because the month is January,  month(0-11)
```


### Getting date

Let's extract or get the date of the month from a time object.

```js
const now = new Date()
console.log(now.getDate()) // 5, because the day of the month is 5th,  day(1-31)
```

### Getting day

Let's extract or get the day of the week from a time object.

```js
const now = new Date()
console.log(now.getDay()) // 6, because the day is Saturday which is the 7th day
//  Sunday is 0, Monday is 1 and Saturday is 6
// Getting the weekday as a number (0-6)
```

### Getting hours

Let's extract or get the hours from a time object.

```js
const now = new Date()
console.log(now.getHours()) // 0, because the time is 00:56:41
```

### Getting minutes

Let's extract or get the minutes from a time object.

```js
const now = new Date()
console.log(now.getMinutes()) // 56, because the time is 00:56:41
```

### Getting seconds

Let's extract or get the seconds from a time object.

```js
const now = new Date()
console.log(now.getSeconds()) // 41, because the time is 00:56:41
```