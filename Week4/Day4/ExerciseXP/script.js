// //Exercise 1
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location:{country, city, coordinates:[lat,lng]}}= person
// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

//Exercise 2: Display

// let person = {
//     name: {
//         first: 'David',
//         last: 'Perlow',
//     },
//     interests:{
//         sports: 'Basketball',
//         music:  'electronic dance music'
//     }
// }

// function displayStudentInfo(objUser) {
//     const {first, last} = objUser.name
//     const {sports, music} = objUser.interests
// console.log(`Your full name is ${first} ${last}.You love ${sports} and ${music}.`);
// }

// displayStudentInfo(person);

//Exercise 3: User & ID
// const users = { user1: 18273, user2: 92833, user3: 90315 }

// const myNewArray = Object.entries(users).map(([key,value])=>[key, value * 2]);
// console.log(myNewArray)

//Exercise 4: Person Class
// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }
//   const member = new Person('John');

// Exercise 5 : Dog Class
//   class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   };
//   Analyze the options below. Which constructor will successfully extend the Dog class?
//     // 1
//   class Labrador extends Dog {
//     constructor(name, size) {
//       this.size = size;
//     }
//   };


//     // 2
//   class Labrador extends Dog {
//     constructor(name, size) {
//       super(name);
//       this.size = size;
//     }
//   };
// This is the best option since the desire is to extend the class, we need to use the super method, but in order to do so correctly,
// the constructor must include the previous parameter(name) as wel as the new one(size) equalling:
// constructor(name,size)  

//     // 3
//   class Labrador extends Dog {
//     constructor(size) {
//       super(name);
//       this.size = size;
//     }
//   };


//     // 4
//   class Labrador extends Dog {
//     constructor(name, size) {
//       this.name = name;
//       this.size = size;
//     }
//   };

//Exercise 6: Challenges:
//Part 1
// [2] === [2] 
// {} === {}
//Both of these are false because they are different objects,
//They don't check the values inside them.
//Part 2
// const object1 = { number: 5 };
// const object2 = object1;
// const object3 = object2;
// const object4 = { number: 5 };

// object1.number = 4;
// console.log(object2.number)
// console.log(object3.number)
// console.log(object4.number)


//Exercise 7:
// class Animal {
//     constructor(name, type, color) {
//         this.name = name;
//         this.type = type;
//         this.color = color;
//     }
// }

// class Mamal extends Animal {
//     constructor(name, type, color, animalsound) {
//         super(name, type, color);
//         this.sound = animalsound;
//     }

//     animalsound() {
//         return `${this.sound}, I'm a ${this.type} named ${this.name} and I'm ${this.color}.`
//     }
// }

// const farmerCow =  new Mamal('Parah', 'cow', 'black and white', 'Mooo!');

// console.log(farmerCow.animalsound())
