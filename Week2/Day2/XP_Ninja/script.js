//Exercise 1: Age Difference
let boyAge = 2011;
let girlAge = 2000;
const differenceOfYears = boyAge-girlAge
const halfTheAge= differenceOfYears/2+2000
console.log(halfTheAge)
let age1= prompt("What year was the first person born?");
let age2= prompt("What year was the second person born?");

let year1 = Number(age1);
let year2 = Number(age2);

if (year1>year2){
let differenceOfAge;
let halfTheAge;
differenceOfAge=year1-year2;
halfTheAge= (differenceOfAge/2)+year2
console.log(`The middle age will be ${halfTheAge}`)
} else if(year1<year2){
    differenceOfAge=year2-year1;
    halfTheAge= differenceOfAge/2+year1;
    console.log(`The middle age will be ${halfTheAge}`)
}

//Exercise 2: Zip Codes

let requestZipCode = prompt("Enter your Zip Code");
if (requestZipCode.length === 5 && isItOnlyNumbers(requestZipCode) && !findWhiteSpace(requestZipCode)){
    console.log("Success");
} else{
    console.log("Error");
}

function isItOnlyNumbers(str) {
    return /^\d+$/.test(str);
}
function findWhiteSpace(str){
    return /\s/g.test(str);
}
 
//Exercise 3: Secret Word
let newWord = prompt("Please Write A Word");
for(let i=0; i<newWord.length;i++){
    let itemedLet = newWord[i];
    let newValue
    if(itemedLet ==="a"){newValue=1}
    else if(itemedLet ==="e"){newValue=2}
    else if(itemedLet ==="i"){newValue=3}
    else if(itemedLet ==="o"){newValue=4}
    else if(itemedLet ==="u"){newValue=5}
    else{continue};
    newWord = newWord.replace(itemedLet, `${newValue}`);
    console.log(newWord);
}
















// let userRequest = prompt("Please type a word");
// for(let i=0;i<userRequest.length; i++){
//     let newValue;
//     let vowelItem = userRequest[i];
// if (vowelItem==="a"){newValue=1}
// else if (vowelItem==="e"){newValue=2}
// else if (vowelItem==="i"){newValue=3}
// else if (vowelItem==="o"){newValue=4}
// else if (vowelItem==="u"){newValue=5}
// else{continue};
// userRequest= userRequest.replace(vowelItem, `${newValue}`)
// console.log(userRequest);
// }



// //Exercise 3
// let promptA = prompt("Write down a verb!");
// for(let i= 0; i<promptA.length; i++){
//     let letterValue
//     let itemedLetter = promptA[i];
//     if(itemedLetter==="a"){letterValue=1}
//     else if(itemedLetter==="e"){letterValue=2}
//     else if(itemedLetter==="i"){letterValue=3}
//     else if(itemedLetter==="o"){letterValue=4}
//     else if(itemedLetter==="u"){letterValue=5}
//     else{continue}; //This is something new.
//     promptA= promptA.replace(itemedLetter,`${letterValue}`)    //Notice how we use promptA each time
//     console.log(promptA);
// }
// replace vowels with new value
// add a function that looks for vowels
// loop the word







// //Exercise 1: Age Difference
// let newNumber1= Number(prompt("What year was the first person born?"));
// let newNumber2= Number(prompt("What was the year the second person was born?"));

// if(newNumber1>newNumber2){
//     let halfTheAgeOfTheOlder;
//     let differenceInYears;
//     differenceInYears= newNumber1-newNumber2;  //// This gives me the difference in years   
//     halfTheAgeOfTheOlder = differenceInYears/2 + newNumber2
//     console.log(halfTheAgeOfTheOlder)
// } else if(newNumber2>newNumber1){
//     differenceInYears= newNumber2-newNumber1;    //2000-1984      //16
//     halfTheAgeOfTheOlder= differenceInYears/2 + newNumber1;   // 8 + 1984 
//     console.log(halfTheAgeOfTheOlder);
// }

// let age1 = prompt("What is your age?")
// let age2 = prompt("What is your age?")

// let numericalAge1 = Number(age1)
// let numericalAge2 = Number(age2)

//let newNumber = "1972"
//console.log(newNumber)

// Given the years two people were born, 
//find the date when the younger one is exactly half the age of the older.

//let firstVariable = Number(newNumber1.slice(2))
//let secondVariable = Number(newNumber2.slice(2))

// if(age1>age2){
//     console.log()
// }

// age . slice indexOf.position[][] 


// //Exercise 2
// let zipCode = prompt("What is your zip code?");
// let numericalZip = Number(zipCode);
// if (Number(zipCode.length) === 5 && isItOnlyNumbers(zipCode) && !findWhiteSpace(zipCode)){
//     console.log("Success");
//     console.log(numericalZip);
// }else{
//     console.log("Error")
// }

// function isItOnlyNumbers(str) {
//     return /^\d+$/.test(str);
// }

// function findWhiteSpace(str){
//     return /\s/g.test(str);
// }

// //Exercise 3
// let promptA = prompt("Write down a verb!");
// for(let i= 0; i<promptA.length; i++){
//     let letterValue
//     let itemedLetter = promptA[i];
//     if(itemedLetter==="a"){letterValue=1}
//     else if(itemedLetter==="e"){letterValue=2}
//     else if(itemedLetter==="i"){letterValue=3}
//     else if(itemedLetter==="o"){letterValue=4}
//     else if(itemedLetter==="u"){letterValue=5}
//     else{continue}; //This is something new.
//     promptA= promptA.replace(itemedLetter,`${letterValue}`)    //Notice how we use promptA each time
//     console.log(promptA);
// }



// let newWord = prompt("Please type a word");
// for(let i=0; i <newWord.length; i++){
//         let letterValue
//         let currentLetter = newWord[i];
   
//             if(currentLetter==="a"){letterValue=1}
//             else if(currentLetter==="e"){letterValue=2}
//             else if(currentLetter==="i"){letterValue=3}
//             else if(currentLetter==="o"){letterValue=4}
//             else if(currentLetter==="u"){letterValue=5}
//             else {continue} // this causes it to keep iterating
//             newWord = newWord.replace(currentLetter, `${letterValue}`)
//         console.log(newWord)
//     }
    
    
    
    
    // const replace = {
    //     a:1,
    //     e:2,
    //     i:3,
    //     o:4,
    //     u:5,
    // }
    
    // const givenWord = prompt("Please type a word");
    // const noVowels = givenWord.replace(/[aeiou]/gi,);
    // for(let i=0; i <givenWord.length; i++){
    //     let newWord
    //     let letterValue
    //     let currentLetter = givenWord[i];
    //     if(currentLetter==="a"){letterValue=1};
    //     if(currentLetter==="e"){letterValue=2};
    //     if(currentLetter==="i"){letterValue=3};
    //     if(currentLetter==="o"){letterValue=4};
    //     if(currentLetter==="u"){letterValue=5};    
    //     newWord = noVowels.replace(currentLetter, `${letterValue}`);
    //     console.log(newWord);
    // }