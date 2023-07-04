//#1

// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//         alert(`inside the funcOne function ${a}`);
//     }
// }
// //a is set as a let variable outside of the brackets
// //if run as a const- my prediction is that it woun't work because it is outside of the brackets

// //#2
// //#2
// const a = 0;
// function funcTwo() {
//     alert(`${a}`)
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

//This will alert 0, since funcThree can't access
//what is in funcTwo

//#2.1
//Prediction, if the value is set with a const 
//instead of let, it will render an error.
//So a const can be called within a function when
//hoisted outside. However, if within a function
// you want to change the value of that variable, 
//it prevents you since it has a constant state.
//To change this, use the let variable.

// //#3
// function funcFour() {
//     window.a = "hello";
// }
// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }
// funcFour()
// funcFive()

// //#4
// const a = 1;
// function funcSix() {
//     a = "test";
//     alert(`inside the funcSix function ${a}`);
// }
// //I predict it will show the string value "test"
// funcSix()
// //If declared with const, it will either run an error
// //or log 1.

//let#5
// let c = 2;
// if (true) {
//     let c = 5;
//     alert(`in the if block ${c}`)
// }
// alert(`outside of the if block ${c}`)

// //Exercise 2: Tenary Operators
// let experiencePoints
// const winBattle = ()=>{
//     return true
// }

// experiencePoints = winBattle()=== true ? experiencePoints=10: experiencePoints=1
// console.log(experiencePoints)

// //Exercise 3: Is it A String?
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
// Check out the example below to see the expected output?

// const isItAString= (value) =>{
//  return typeof value === 'string'
// };


// console.log(isItAString(1))


// //Exercise 4: Colors
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// colors.forEach((color,index)=>{
// const position = 1+index;
// const message = `Your #${position} choice is ${color}`
// console.log(message)
// })

//Exercise 5: Colors #2
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th", "st", "nd", "rd"];

// colors.forEach((color, index) => {
//   const position = index + 1;
//   let ordinalIndicator;

//   if (position % 10 === 1 && position !== 11) {
//     ordinalIndicator = ordinal[1]; // "st" for 1st
//   } else if (position % 10 === 2 && position !== 12) {
//     ordinalIndicator = ordinal[2]; // "nd" for 2nd
//   } else if (position % 10 === 3 && position !== 13) {
//     ordinalIndicator = ordinal[3]; // "rd" for 3rd
//   } else {
//     ordinalIndicator = ordinal[0]; // "th" for the rest
//   }

//   const message = `${position}${ordinalIndicator} choice is ${color}.`;
//   console.log(message);
// });

// Exercise 6: Bank Details
// let bankAmount = 1000; // The initial bank amount
// const VAT = 0.17; // The VAT percentage
// const expenses = ["+200", "-100", "+146", "+167", "-2900"]; // Monthly expenses

// expenses.forEach((expense, index) => {
//   const amount = parseFloat(expense); // Convert expense string to a number
//   const taxedAmount = amount + amount * VAT; // Apply VAT to the expense

//   expenses[index] = taxedAmount.toString(); // Update the expense with the taxed amount
//   bankAmount += taxedAmount; // Modify the bankAmount based on the taxed expense
// });

// console.log("Current bank account standing:", bankAmount.toFixed(2));