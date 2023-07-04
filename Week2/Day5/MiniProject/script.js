// In the JS file, create a function called playTheGame() that takes no parameter.
// In the function, start by asking the user if they would like to play the game (Hint: use the built-in confirm() function).       
// If the answer is false, alert “No problem, Goodbye”.


playTheGame()
function playTheGame(){
    let theAnswer = confirm("Do you want to play?");
    if(!theAnswer) return alert("Ok, next time.");
    let numberPicked = prompt("Pick a number between 0 and 10");
    if(!betweenZeroAndTen(Number(numberPicked))) return alert("Not a good number. Goodbye")
    if(!onlyNumbers(numberPicked)) return alert ("Sorry not a number. Goodbye.")
    let computerNumber = Math.floor(Math.random() * 11);
    let chances = 0
    while(Number(numberPicked)!=computerNumber){
        chances = chances+1
        if(chances===3){return alert(`Sorry you have no more chances, the correct answer was ${computerNumber} play again!`)
    }
    let biggerOrSmaller = (Number(numberPicked)>computerNumber) ? "bigger" : "smaller";
    alert(`Your number is ${biggerOrSmaller} than the computer number, try again.`)
    numberPicked = prompt("Pick a number between 0 and 10");
}
}

alert(`Winner! You chose the correct number as the computer ${computerNumber}`)

function betweenZeroAndTen(str){
    return str >=0 && str<=10
}

function onlyNumbers(str){
    return /^\d+$/.test(str);
}

function computerGeneratedNumber(){
    Math.floor(Math.random() * 11);
}





















// playTheGame()
// function playTheGame(){
//     const areYouReady = confirm("Do you want to play?");            //here we make the confirm method a const variable
//     if(!areYouReady) return alert ("No worries, have a great day!")
//     let computernumber = computerGeneratedNumber();
//     let chooseANumber= prompt("Choose your number");
//     let attemptsMade = 0
//     while(Number(chooseANumber)!=computernumber){
//         attemptsMade = attemptsMade +1;
//         if(attemptsMade===3) return alert("Sorry you have no more chances.", "The computer chose", computernumber)
//         if(!onlyNumbers(chooseANumber)) return alert("Sorry you need to choose a number.")
//         if(!betweenZeroAndTen(Number(chooseANumber))) return alert ("Sorry you chose an incorrect number.")
//         console.log("You chose: ", (Number(chooseANumber)), "The computer chose: ", computernumber)

//         let biggerOrSmaller = (Number(chooseANumber) > computernumber) ? "bigger" : "smaller";
//         alert(`Your selection is ${biggerOrSmaller} than the computer's.`)
//         chooseANumber= prompt("Choose your number");
//     }

// alert(`Winner, you chose ${computernumber} just like the computer.`)
// console.log("You chose ", (Number(chooseANumber)), "and the computer chose ", computernumber, ".")
// }

// function onlyNumbers(str){
//     return /^\d+$/.test(str);
// }

// function betweenZeroAndTen(number){
//     return number>=0 && number<=10
// }

// function computerGeneratedNumber(){
//     return Math.floor(Math.random() * 11);
// }













// playTheGame();
// function playTheGame(){
//     const userReady = confirm("Do you want to play?");
//     if(!userReady) return alert("No problem, Goodbye.");
//     let pickANumber = prompt("Select a Number Between 0 and 10");
//     const computerNumber = computerGeneratedNumber();
//     let attempts = 0;
//     while(Number(pickANumber)!=computerNumber){
//         attempts = attempts +1;
//         if(attempts ===3) return alert("Sorry, you can't choose again.");
//         if(!isItOnlyNumbers(pickANumber)) return alert("Sorry not a number, Goodbye");
//         if(!inBetweenZeroAndTen(Number(pickANumber))) return alert ("Sorry not a good number, Goodbye.");
        
//         console.log(Number(pickANumber),computerNumber);

//         let biggerOrSmaller = (Number(pickANumber) > computerNumber) ? "bigger" : "smaller";
//         alert(`Your number is ${biggerOrSmaller} than the computers. Guess again`); 
//         pickANumber = prompt("Select a Number Between 0 and 10"); 
// }

// console.log(`Winner! You chose the correct answer. The computer chose ${computerNumber}`)
// alert("Winner! Good Job!")
// }






// function isItOnlyNumbers(str){
//     return /^\d+$/.test(str);
// }

// function inBetweenZeroAndTen(number){
//      return number >=0 && number<=10;
// }

// function computerGeneratedNumber(){
// return Math.floor(Math.random() * 11);
// }











// playTheGame()

// function playTheGame() {
//     const isUserReady = confirm("Do you want to play?")                                          //confirm asks for an ok or cancel. It responds with a true or false value.
//     if (!isUserReady) return alert("No problem, Goodbye")                                       // ! means that if the person selects cancel it returns false
    
//     const computerNumber = generateRandomNumber()                                               // and responds with "No problem, goodbye"
//                                                                                                 // we use the return to get out of the function
//     let answer = prompt("Enter a number")                                                       //If the person selects ok, it asks for a number
//     let numberOfTries = 0
//     while(Number(answer) != computerNumber){
//         numberOfTries = numberOfTries+1
//         if(numberOfTries ===3) return alert(`Sorry, too many tires. The correct number was: ${computerNumber}`)
//         if (!isItOnlyNumbers(answer)) return alert("Sorry not a number, Goodbye")                       
//         if (!inBetweenZeroAndTen(Number(answer))) return alert("Sorry, it's not a good number, Goodbye")            
                                                                                                       
//         console.log(Number(answer), computerNumber);

//         let biggerOrSmaller = (Number(answer) > computerNumber) ? "bigger" : "smaller";         
//         alert(`Your number is ${biggerOrSmaller} than the computer's, guess again.`) 
//         answer = prompt("Enter a number")
//     }

//     console.log("The computer number is:", computerNumber);
//     alert("Winner, keep it up!")
//     console.log("Congrajulations you found the number !")
// }

// function canGameContinue() {
// }

// function isItOnlyNumbers(str) {
//     const regex = new RegExp(/^[0-9]*$/)
//     return regex.test(str)
// }

// function inBetweenZeroAndTen(number) {
//     return number >= 0 && number <= 10
// }

// function generateRandomNumber() {
//     return Math.floor(Math.random() * 11)
// }














// function compareNumber(userNumber, computerNumber) {
//     if (userNumber === computerNumber) {
//         alert("WINNER!")
//         return
//     }
//     if (userNumber > computerNumber) {
//         alert("Your number is bigger than the computer number, guess again")
//     }
// }


// let question = prompt("Do you want to play this game?");
// let response1 = alert("Awesome, let's start")
// let response2 = alert("No problem, Goodbye")
// let computerNumber
// let answerToQuestion = Number(question);
// answer1 = "yes"
// answer2 = "no"
// //question === answer1 ? response1 : response2 ;

// // if (isNaN(answerToQuestion) || answerToQuestion === "" || answerToQuestion === null) {
// //     alert("Sorry, not a number, Goodbye")
// //     question = prompt("Do you want to play this game?");
// // } else if (answerToQuestion >10){
// //     alert("Sorry it's not a good number,Goodbye")
// // } else (
// //     computerNumber= Math.floor(Math.random()*11)
// // )