//alert("good morning!");

//Using if statement//
/*let age = 20

if (age > 18) {
    console.log("You're a big man")
}*/

//Using if else statement --- Remember to always add "" around the value//

/*let age = 19;

if (age > 18) {
    console.log("Eligible")
} else {console.log("Non-Eligible")}*/

/*Make a keyless car!

This car will only let you drive if you are over 18. Make it do the following:

Using prompt() and alert(), ask a user for their age.

IF they say they are below 18, respond with: "Sorry, you are too young to drive this car. Powering off
IF they say they are 18, respond with: "Congratulations on your first year of driving. Enjoy the ride!
IF they say they are over 18, respond with: "Powering On. Enjoy the ride!"

let age = 17;

if (age === 18) {
    console.log("Congratulations on your first year of driving. Enjoy the ride!")
}
else if (age > 18){
    console.log("Powering On. Enjoy the ride!")
} else {
    console.log ("Sorry, you are too young to drive this car. Powering off")
} 

let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4://Expected Outcome
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too large' );
    break;
  default:
    alert("I don't know such values");
}

let a = 2 + 2;

switch (a) {
  case 4: //expected outcome
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}

let person ={
    firstName: "David",
    lastName: "Perlow",
};
console.log(person.firstName);
//To Change I use the "=" button//
person.firstName="Yonit"
person.hairColor="brown"
person.stress="high"
console.log(person);
delete person.stress
console.log(person)

Create a stuctured html file linked to a JS file

1. Create an object that has properties "username" and "password". Fill those values in with strings.
2. Create an array which contains the object you have made above and name the array "database".
3. Create an array called "newsfeed" which contains 
3 objects with properties "username" and "timeline".
*/
// let member ={
//     username: "CodedavidperloW",
//     password:"youCanDoIt",
// }

// let database = [member];
// console.log(database);

// let newsfeed = [
//     {
//        username:"john",
//        password:123
//     },
//     {
//        username:"lise",
//        password:124
//     },
//     {
//         username:"david",
//         password:125,
//     }
//     ]

// const name="David";
// const nameLast="Perlow";
// const name2= "Yonit";
// const nameLast2= "Perlow";
// const name3 = "Ruth Esther"
// const nameLast3="Perlow";
// const datalist = [name, name2, name3];
// const dataListLastName= [nameLast,name2,nameLast3];
// const answer= "";  //how come I can't acess this when I am in the console?
// //it shows up once, but how come I can't recall it after refreshing the page?

// if (!(nameLast3)===dataListLastName[2]){
//   alert("You are not Ruth Esther");
//   prompt("What is your first and last name?");
// } else if(nameLast3===name3){
//   prompt("Incorrect Sign-in");
// }else {
//   alert("I think you are understanding this more");
//   const answer = prompt("What are two reasons you think you understand this more?");
//   console.log(answer);
// }
// if(name3===name2 || name2===26){
//   alert("Welcome");
//   prompt("When is your birthday?");
// } else if (name!==name2 || name===name3){
//   prompt("Good Job");
// }

// if (datalist[1]===name){
//   alert("Welcome David");
// }else if (datalist === name,name2,name3 && dataListLastName===nameLast,nameLast2,nameLast3){
// alert("Hello Perlow Family");
// }

// const newObject ={
//   person: "David",
//   age:"38",
//   hobby: "basketball",
//   married: true,
//   thingsToDo:["Parsha","Mincha","Course","Story","Exercise"] // Here you have an array inside an object
// };
// //How can I add properties to an object?
// newObject.favouriteTime = "5:05"; // Does this stay a string, or can it be changed to a number?
// newObject.age =39;

// const user1 ={
//   person: "David",
//   age:"38",
//   hobby: "basketball",
//   married: true,
//   thingsToDo:["Parsha","Mincha","Course","Story","Exercise"] // Here you have an array inside an object
// };
// const user2={
//   person: "Yonit",
//   age:"19",
//   hobby: "dancing",
//   married: true,
//   thingsToDo:["be happy","rest","enjoy life","Story","Exercise"] // Here you have an array inside an object
// };
// const user3={
//   person: "Don",
//   age:"13",
//   hobby: "horseback riding",
//   married: false,
//   thingsToDo:["Mincha","Exercise"] // Here you have an array inside an object
// };
// const user4={
//   person: "Sarah",
//   age:"11",
//   hobby: "singing",
//   married: false,
//   thingsToDo:["Course","Story",] // Here you have an array inside an object
// };
// const user5={
//   person: "John",
//   age:"8",
//   hobby: "basketball",
//   married: false,
//   thingsToDo:["Parsha","Play","Homework","Story","Exercise"] // Here you have an array inside an object
// };
// const arrayWithObjects = [user1, user2, user3, user4, user5];
// var favFood = ["coffee","challah","techina","steak","shakshuka","protein shakes"];
//experiment with pop and push with array

const speak = function(name, age, occupation){
  console.log(`Good day ${name} you are ${age} and the best ${occupation}`);
}

speak('Yonit', '38', 'teacher');

