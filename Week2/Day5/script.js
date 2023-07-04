//Advanced Control Flow

//Practice Arrow Functions

//Advantages of Ternary Operators

const playTimeisAt = 3
const dinnerTimeisAt =17
const answer1 = "So get the ball";
const answer2 = "So wash your hands";

(playTimeisAt>dinnerTimeisAt) ?  answer1 : answer2;






































function dreamABigDream(myLove) {
    let theResponse
    switch (myLove) {
        case "DJ":
            theResponse = "Because the heart needs your love!";
            break;
        case "Exercise":
            theResponse = "Because the body";
            break;
        case "Torah":
            theResponse = "For the body and heart!"
    } return theResponse;
}

function forShabbat(activity) {
    let idea
    switch (activity) {
        case "smile":
            idea = "Love everyone for the fact that we are Jews and One with Hashem";
            break;
        case "Learn Torah":
            idea = "Stay connected tthe rhythm of teh holy day.";
            break;
        case "Make conversation":
            idea = "This will eleveate all the vibes for everyone not just yourself."
            break;
        case "Fun With Kids":
            idea = "Keep some space while having the best time ever!"
            break;
    }return idea
}


function toPlanAhead(thingToDo) {
    let doIt
    switch (thingToDo) {
        case "Pick out Clothes":
            doIt = "This will help your confidence in looking your best.";
            break;
        case "Pack your Bag":
            doIt = "This will help you feel organized and ready to make it the best";
            break;
        case "Organize Three Small Speeches":
            doIt = "This will help you have Torah with others, include Aggadah and Halacha in relation to Purim and the Parsha";
            break;
        case "Pray":
            doIt= "The success is from Hashem and only He can grant you the Shabbat of a lifetime for you and others.";
            break;
    }
    return doIt;
}
// function learnSwitchStatements(day) {
//     let theDay
//     switch (day) {
//         case "Sunday":
//             theDay = "This is the first day of the week, plan it";
//             break;
//         case "Monday":
//             theDay = "This is the second day of the week, you need to wake up early for minyan";
//             break;
//         case "Tuesday":
//             theDay = "On this day, shacrit is shorter, so learn more before and after";
//             break;
//         case "Wednesday":
//             theDay = "On this day, I hope you have gotten your main goals done or at least are close to finishing them";
//             break;
//         case "Thursday":
//             theDay = "This is a big day, you need to finish it strong. Be ready for it and as always get up early to learn Torah";
//             break;
//         case "Friday":
//             theDay = "The Shabbat is coming, get ready for the best of life";
//             break;
//         case "Shabbat":
//             theDay = "Be with your family and make your wife happy!";
//     }
//     return theDay
// }
// function moveCommand(direction){
//     let whatHappens;
//     switch(direction){     //switch checks direction
//         case "forward":    //if direction equals forward
//             whatHappens="you encounter a friend";
//             break;
//         case "back":    //if direction equals forward
//             whatHappens="you get power";
//             break;
//         case "down":    //if direction equals forward
//             whatHappens="you found a coin";
//             break;
//         case "upstairs":    //if direction equals forward
//             whatHappens="you discover a key";
//             break;
//             default:
//                 whatHappens = "please enter a valid direction";
//     }
//     return whatHappens
//
// //cool arrow functions

// function sum(a, b) {
//     return a + b
// }

// let sum2 = (a, b) => a + b

// function isPositive(number) {
//     return number >= 0
// }

let isPositive2 = (number) => number *2 

isPositive2(3);











// function randowmNumber() {
//     return Math.random
// }

// let randowmNumber2 = () => Math.random

// document.addEventListener('click', function () {
//     console.log('Click')
// })









// condition ? expr1 : expr2;

// function isUserValid(bool){
//     return bool;
// }

// var answer = isUserValid(true) ? "You may enter" : "Access Denied"









