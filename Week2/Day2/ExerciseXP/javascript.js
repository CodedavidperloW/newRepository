//ex 1

// let x = 5;
// let y = 10;
// if(x>y){
//     console.log(x)
// }else if(console.log(y));


//ex 2
// let newDog = "Chihuahua";
// let lengthValue = newDog.length;
// console.log(lengthValue);
// console.log(newDog.toUpperCase)
// console.log(newDog.toLowerCase)
// if(lengthValue===newDog.length){
//     console.log("I love Chihuahuas")
// }else(console.log("I like cats"))

//ex 3
// let varNum = prompt("Please type a number");
// if(varNum%2===0){
//     console.log(`${varNum} is an even number`)
// }else(console.log(`${varNum} is an odd number`))

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
console.log(users);
if(users.length===1){
    console.log(`${users[0]} is online.`)
}if(users.length===2){
    console.log(`${users[0]} and ${users[1]} are online.`)
}
if(users.length>2){
    console.log(`${users[0]}, ${users[1]} and ${users.length} more are online.`)
}




// //Exercise 1: Simple If/Else Statement

// let x = 5;
// let y = 2;

// if(x>y) {
//     console.log("x is the biggest number")
// } else if (y>x){
//     console.log("y is the biggest number")
// }
// console.log;


// //Exercise 2 Chihuahua

// let newDog = "Cat";
// console.log(newDog.length);
// console.log(newDog.toLowerCase);
// console.log(newDog.toUpperCase);

// if(newDog=== "Chihuahua"){
//     console.log("I love Chihuahuas, its my favorite dog breed")
// } else {
//     console.log("I don't care, I prefer cats")
// }

// //Exercise 3 Even Odd
// const userNumber = prompt("What is your number?");
// if(userNumber%2===0){
//     console.log("This is an even number")
// } else{
//     console.log("This is an odd number")
// }

// //Exercise 4
// //My logic is to change users to a number.
// //Then to change the array to read <name_user1>.
// //Make a conditional if / if else, to display the prompt.
// // const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
// // Number(users);
// // console.log();
// //if (user===1){
// //    console.log()
// //}
// /*
// if (users.length === 0){
//     console.log("No one is online");
// } else if (users.length === 1){
//     console.log(`${users[0]} is online`);
// } else if (users.length === 2){
//     console.log(`${users[0]} and ${users[1]} are online`);
// }  else if (users.length > 2){
//     const remainingUsers = users.length -2
//     console.log(`${users[0]} and ${users[1]} and ${remainingUsers} more are online`);
// }
// */

// //Exercise 4
// //let usersRemaining = Number(users) -2;
// //Couldn't complete

// const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000", "johnho", "beastlyboy"];
// if (users === 0){
//     console.log("No one is online.")
// } else if (users === 1){
//     console.log(`${users[0]} is online`)
// } else if (users === 2){
//     console.log(`${users[0]} and ${users[1]} is online`)
// }  
// else {
//     let usersRemaining = users.length -2; 
//     console.log(`${users[0]} and ${users[1]} and ${usersRemaining} more are online`)
// }
