// Exercise 1
// let numbers = [123, 8409, 100053, 333333333, 7]

// for(let i=0;i<numbers.length;i++){
//     let selectedNumber = numbers[i];
//     if(selectedNumber%3===0){
//         console.log(`The number ${selectedNumber} is divisible by three.`)
//     }else if(!selectedNumber%3===0){
//         console.log(`The number ${selectedNumber} is not divisible by three.`)
//     }
// }

//Exercise 2: Attendance

//let lowerCaseNames = askForName.toLowerCase();

// let guestList = {
//     randy: "Germany",
//     karla: "France",
//     wendy: "Japan",
//     norman: "England",
//     sam: "Argentina"
// }
// let askForName = prompt("What's your name?")
// let askForName2= askForName.toLowerCase()
// let country = guestList[askForName2]

// if(askForName2 in guestList){
// console.log(`Hello my name is${askForName} and I am from ${country}.`)
// } else {
//     console.log(`Hello my name is ${askForName} and I am a guest.`)
// }

// console.log(guestList);

//Exercise 3: Playing with Numbers
// let age =  [20,5,12,43,98,55];
// let sum = 0;
// for(let i=0;i<age.length;i++){
//    sum= sum += age[i]
// console.log(sum)
// }


let age =  [20,5,12,43,98,55];
let sum= 0;
let max=0;
for(let i=0;i<age.length;i++){
   let eachAge= age[i];
   sum = sum+=eachAge
   
   if(eachAge>max){
      max=eachAge
   }
   console.log("The highest number is",max);
   console.log("The total sum of the numbers is",sum);

}






// //Exercise 1

// let numbers = [123, 8409, 100053, 333333333, 7]

// for(let i=0; i<numbers.length; i++){
//     let currentNumber = numbers[i];
//     if(currentNumber%3===0){
//         console.log(currentNumber, "true")
//     }else(console.log(currentNumber, "false"))
// }

// //Exercise 2
// let guestList = {
//     randy: "Germany",
//     karla: "France",
//     wendy: "Japan",
//     norman: "England",
//     sam: "Argentina"
//   }

//   let whatName = prompt("What's your name?")
//   let lowerCaseName = whatName.toLowerCase()

//   let country = guestList[lowerCaseName]

//   //        Object.keys(guestList) // this shows all the values

//   if(lowerCaseName in guestList){
//       console.log(`Hi! I'm ${lowerCaseName}, and I'm from ${country}`)
//   }


// //Exercise 3
// let age = [20, 5, 12, 43, 98, 55];
// let sum = 0;
// let max = 0;
// for (let i = 0; i < age.length; i++) {
    
//     let individualAge = age[i];
    
//     sum = sum + individualAge;
//     console.log(sum);
    
//     if(individualAge>max){
//         max=individualAge;
//     }
//     console.log(max)

// }



