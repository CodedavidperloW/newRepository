// //split
// //indexOf
// //repeat
// //%2===0

// //Exercise 2
// const askforNumbers= prompt("Select two numbers seperated by commas");
// let variableNumbers = askforNumbers.split(",")
// let totalSum = Number(variableNumbers[0])+Number(variableNumbers[1]);
// console.log(totalSum);

// //Exercise 3

// const senten="I love the movie named Nemo";

// let findNemo = senten.indexOf("Nemo",0);
// console.log(findNemo);
// console.log(`I found Nemo at ${findNemo}.`)

//Exercise 4

let askForNum = prompt("Select a Number")
let answerOf = Number(askForNum);
let boom = "boom"
let beginningBo = "b"
let additionalO = "o"
let finalM = "m";
let greaterThanTwoBoom = beginningBo + additionalO.repeat(answerOf) + finalM
let divisibleByTwo = beginningBo + additionalO.repeat(answerOf) + finalM + "!";
let divisibleByFive = greaterThanTwoBoom.toUpperCase()
let divisibleByTwoAndFive = greaterThanTwoBoom.toUpperCase() + "!";

if (answerOf <= 2) {
    console.log(boom)
} if (answerOf >= 2) {
    console.log(greaterThanTwoBoom)
} if (answerOf % 2 === 0) {
    console.log(divisibleByTwo);
} if (answerOf % 5 ===0) {
    console.log(divisibleByFive);
} if (answerOf % 2 ===0 && answerOf % 5 === 0) {
    console.log(divisibleByTwoAndFive);
}







// //Ex 2

// let question = (prompt("Please type two numbers seperated by a comma"));
// let theNumbers = question.split(",")
// var theSumOfBothNumbers = Number(theNumbers[0])+Number(theNumbers[1]);
// console.log(theSumOfBothNumbers);


// //Previous I wrote but I didn't use the split method.
// //let theAnswer = Number(question[0])+Number(question[2]) //// Doesn't make sense to me, why does this work?
// // //Shouldn't it be Number(question[0])+Number(question[1])?  But when I write question[1] I get a NaN response.
// // console.log(theAnswer);


// //Ex 3 Finding Nemo

// const askTheUserForSentence = prompt("Write a sentence containing the word Nemo.")
// console.log(askTheUserForSentence);
// let positionOfNemo = askTheUserForSentence.indexOf("Nemo")
// console.log(`I found Nemo at ${positionOfNemo}`)

// if (positionOfNemo === -1){
//     console.log("I can't find Nemo.")
// }


// // //Ex 4: Boom
// let askForNumber = Number(prompt("Please choose a number"));
// console.log(askForNumber);

// let boomVariable = "b"+("o".repeat(askForNumber))+"m";

// if ( askForNumber < 2){
//     console.log("boom")
// }

// if (askForNumber > 2 ){
//     console.log(boomVariable)
// }

// if (askForNumber%2===0){
//     console.log(boomVariable +"!")
// }

// if (askForNumber%5===0){
//     console.log(boomVariable.toUpperCase());
// }

// if(askForNumber%2===0 && askForNumber%5===0){
//     console.log(boomVariable.toUpperCase()+"!");
// }









// let theNumbers = Number(question);
// console.log(theNumbers);
