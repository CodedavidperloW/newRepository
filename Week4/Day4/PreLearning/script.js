// // var employee = {    // Object we want to destructure
// //     firstname: 'Jon',
// //     lastname: 'Snow',
// //     dateofbirth: '1990'
// // };

// // var { firstname, lastname, dateofbirth } = employee;
// // console.log( firstname, lastname, dateofbirth);



// // var employee = {    // Object we want to destructure
// //     firstname: 'Jon',
// //     lastname: 'Snow',
// //     dateofbirth: '1990'
// // };

// // var { firstname: fn, lastname: ln, dateofbirth: dob } = employee;

// // const object1 = {
// //     a: 'somestring',
// //     b: 42,
// //     c: false
// //   };

// //   console.log(Object.keys(object1));


// //   const object1 = {
// //     a: 'somestring',
// //     b: 42,
// //     c: false
// //   };
// // console.log(Object.values(object1));

// // const object1 = {
// //     a: 'somestring',
// //     b: 42,
// //     c: false
// //   };

// //   console.log(Object.entries(object1));
// //   //puts it into an array representation
// //   // expected output: 
// //   // [ [ 'a', 'somestring' ], [ 'b', 42 ], [ 'c', false] ]

// //   for (let [key, value] of Object.entries(object1)) {
// //     console.log(`${key}: ${value}`);
// //   }

// // const shopping = [
// //     ["apple", "$2"],
// //     ["pear", "$1"],
// //     ["banana", "$0.77"],
// //   ];

// //   const shoppingObject = Object.fromEntries(shopping);
// //   console.log(shoppingObject); // { apple: '$2', pear: '$1', banana: '$0.77' }

// // const address = {
// //     street: 'Evergreen Terrace',
// //     number: '742',
// //     city: 'Springfield',
// //     state: 'NT',
// //     zip: '49007',
// //   };

// //   const{state: s, zip: z} = address
// //   console.log(z,s)

// // const student = [
// //     {
// //         name: 'John Doe',
// //         age: 16,
// //         scores: {
// //             maths: 74,
// //             english: 63
// //         }
// //     },
// //     {
// //         name: 'David',
// //         age: 39,
// //         scores: {
// //             maths: 88,
// //             english: 100
// //         }
// //     }
// // ];

// // for (const { name, scores: { maths, science = 94, english } } of student){   
// //     console.log(`${name} scored a ${maths} in math, ${science} in science and a ${english} in English.`)
// // }

// // const student = {
// //     name: 'John Doe',
// //     age: 16,
// //     scores: {
// //         maths: 74,
// //         english: 63,
// //         science: 85
// //     }
// // };

// // function displaySummary({name, scores:{maths=0, english=0, science=0}}){
// //     console.log('Hello, ' + name)
// //     console.log(`You got a ${maths} in Math, a ${english} in English and a ${science} in Science.`)
// // }
// // displaySummary(student)
// let myCar = {
//     color : 'blue',
//     details : {
//       plateNumber: 123,
//       name : "Ford"
//     }
//   }
  
//   let myNewCar = {...myCar}
//   console.log("myNewCar : ", myNewCar) 
//   // myNewCar :  
//   // { 
//   //      color: 'blue', 
//   //      details: { plateNumber: 123, name: 'Ford' } 
//   // }
  
//   // SHALLOW COPYING
//   myCar.color = "red"
//   console.log("myNewCar.color :", myNewCar.color)
//   // myNewCar.color : blue -- UNCHANGED
//   console.log("myCar.color :", myCar.color)
//   // myCar.color : red -- CHANGED
  
//   // DEEP COPYING
//   myCar.details.plateNumber = 345
//   console.log("myNewCar.details.plateNumber :", myNewCar.details.plateNumber)
//   // myNewCar.details.plateNumber : 345 -- CHANGED
//   console.log("myCar.details.plateNumber :", myCar.details.plateNumber)
//   // myCar.details.plateNumber : 345 : red -- CHANGED

let date = document.getElementById('datetime');
date.addEventListener("change",function(event){
    let date = new Date(event.target.value);
    console.log(date);
  }
);

let now = new Date();
console.log(now);

let dateString = now.toString();
console.log('toString',dateString);


let day = now.getDay();
console.log('getDay',day);

let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
let dayName = dayNames[day];
console.log('dayNames',dayName);

console.log('getMonth',now.getMonth() + 1)
//returns the month of the date from 0 to 11,
//with 0 being January and 11 being December.

console.log('getDate',now.getDate())
console.log('getFullYear',now.getFullYear())

console.log('getHours',now.getHours())
console.log('getMinutes',now.getMinutes())
console.log('getSeconds',now.getSeconds())
console.log('getMilliseconds',now.getMilliseconds())
console.log('getTime',now.getTime())
let today = new Date();
let anotherDay = new Date(2021,1,19, 11, 55)
let diff = anotherDay - today;
console.log('diff',diff);
let days = diff / (1000 * 60 * 60 * 24);
console.log('days',days);
console.log(Math.floor(days));