//prompt
const answer = prompt("type a word seperated by a comma")

let splitAnswer = answer.split(",")

function log(str){
    console.log(str);
}

splitAnswer.forEach(log);

let lengthOfLongestWord = 0
function findLongestWord(str){
    for(let i=0;i<str.length;i++){
        let currentWordLooped = str[i].length;
        if(currentWordLooped>lengthOfLongestWord){
            lengthOfLongestWord=currentWordLooped
            console.log(lengthOfLongestWord)
            return lengthOfLongestWord
        }
    }
}
findLongestWord(splitAnswer)





























// question =prompt("Please add words seperated by commas")
// let answer= question;

// let theArray= answer.split(",") //this created the array and seperated the words by the commas

// theArray.forEach(log)           //this is applying the forEach method using the fuction log to console log each word from the prompt 

// function log(word){             // this is function log that takes  the argument word, in this case the elements of the array on line 4.
//     console.log(word)
// }

// const varForLongestWord = findLongestWord()
// function findLongestWord(){                     //this function finds the longest word by looping the array. As it loops the highest word replaces 'longestWord'
//     let longestWord= 0
//     for(let i=0; i<theArray.length;i++){
//     let currentIndexWord= theArray[i].length;    
//         if(currentIndexWord>longestWord){
//          longestWord=currentIndexWord;
//             //console.log(longestWord);
//             return longestWord;
//         } 
//     }
// }

// const topAndBottomBorder =toMaketheTopandBottomBorderofStars();
// toMaketheTopandBottomBorderofStars();                           //! Here I learned again that I needed to use the 
// function toMaketheTopandBottomBorderofStars(){                  //Variable of the function form line 12. My
//     let TopBottomBorder                                         //mistake before was that I was using the variable
//     for(let i=0;i<varForLongestWord;i++){                       //on line 20 longestword
//         TopBottomBorder = "*".repeat(varForLongestWord +4);     //SUMMARY: Don't use the return variable, use the
//             console.log(TopBottomBorder);
//          return TopBottomBorder                                                      //Variable of the function
//     }
// }



// //sideBorders();
// function sideBorders(){
// for (let i=0;i<theArray.length;i++){
//     let currentWord = theArray[i]
//     let emptySpaces = varForLongestWord-currentWord.length;
//     let spacesToAdd =" ".repeat(emptySpaces)
//     console.log("* " + currentWord +spacesToAdd+" *")
// }
// }

// completeFunction();
// function completeFunction(){
//     findLongestWord();
//     toMaketheTopandBottomBorderofStars();
//     sideBorders();
//     toMaketheTopandBottomBorderofStars();
// }


    
                                                              




//Now make the function for the words
                                                                //To include a star on both left and 
                                                                //Right side


























// const question = prompt("Please write a few words seperated by commas")
// const answer = question   //Here I learned that you can save variables in other variables to munipulate them

// theArray= answer.split(",") // Here I learned how to change a string and transform it into an array.

// theArray.forEach(log)   //Here I challenged myself to use the method .forEach with a parameter, which is a function see line 9.
//                         // The purpose of of using the forEach is to make something happen for each element in an array.
//                         //the variable: theArray is an array.
//                         //.forEach(log) is console.logging each element of the array.

// function log(word){     //This function that has an argument is being used to console.log each word
//     console.log(word)
// }


// const lengthForBorder=findTheBigWord();
// function findTheBigWord(){                          //The next step is to make the border frame of the box.
//     let biggestWordEquals = 0                       //To do this, a function is needed to determine the longest word in the array.
//     for(let i=0;i<theArray.length;i++){             //Once we know how long the biggest element is, then we can use the return value
//         let individualWord = theArray[i].length;    //In another function to make the star top and bottom frame.
//         if(individualWord>biggestWordEquals){       //We started to do this by creating the function biggestWordEquals and inside made a 
//             biggestWordEquals=individualWord;       //variable called biggestWordEquals and set the value at zero
//         }//console.log(biggestWordEquals);          //then we made a 'for' loop for 'theArray.length', then we set a new variable for
//     }                                               //the individual element of the array to apply the if condition: individualWord
//     return biggestWordEquals;                       //While we apply the if condition we are asking if the individualWord is bigger than
// }                                                   //biggestWordEquals. As the loop is run, when the index is higher, it replaces biggestWordEquals.
//                                                     //This function provides us with the largest word in the array, and returns its value
//                                                     //After being saved as a variable lengthForBorder.

// // borderOfStars()
// function borderOfStars(){                               //Now that we have the longest word returning through our previous function
//     let topBottomStars;                                 //We can loop that specific amount of characters that we received from lines 21-23
//     for(let i=0;i<lengthForBorder;i++){                 //In this function we have a "for" loop and it's purpose is to manipulate the length of the 
//     const star="*";                                     //largest words characters. 
//     topBottomStars=star.repeat(lengthForBorder+2);      //We have a variable called star, representing "*";
// }                                                       //Next we made a new variable called topBottomStars whose purpose is to create
// console.log(topBottomStars);                            //the top and bottom frame of stars. We use the star variable and attach to it the
//     // return topBottomStars;                           //repeat method. The parenthesis attached allows for the parameter to be applied. In this case
// }                                                       //the parameter is the (count) of how many times we want it applied. In this function, the star is being
//                                                         //repeated for the span of the longest word "lengthForBorder" with two extra stars.
//                                                         //So this function allows us to console.log(topBottomStars) which provides a row of stars the length
//                                                         //equal to our longest word "lengthForBorder".


// function displayWordsWithBorder(){                                      //This function will be used to create both side borders on both sides of the words
//     for(let i=0;i<theArray.length;i++){                                 //Here a for loop is being used to loop the length of the array.
//     let eachWord=theArray[i];                                           //A variable "eachWord" takes the individual indes of each element within the array
//     const numberOfSpaceToAdd = lengthForBorder-eachWord.length          //Now a solution is made to make up for the additional spaces left by smaller words
//     const emptySpaces = " ".repeat(numberOfSpaceToAdd);                 //The const variable numberOfSpaceToAdd is equal to the numeric value of the longest
//     console.log("*" + eachWord + emptySpaces + "*")                     //word minus the character length of the specific element.
// }                                                                       //Now that we have a variable for the amount of space that is left for each element
//                                                                         //we can create a variable for the empty spaces.
//                                                                         //We use the variable emptySpaces= " ".repeat(numberOfSpaceToAdd)
//                                                                         //This creates the space needed to form a straight line on the right side of the border
//                                                                         //Now the console log creates the side borders. 
//                                                                         //* + the word within the specific index + the amount of spaces to the right equal to the longest word and a *. 
// }

// theFinalFrame();                                                        //This final function, brings them all together to form our box.
// function theFinalFrame(){
//     borderOfStars();
//     displayWordsWithBorder();
//     borderOfStars();
// }



















































//         let spaces
//     for(let i=0;i<theArray.length;i++){
//         let emptySpaces=" ".repeat(spaces);
//         spaces = lengthForBorder.length - eachWord.length;
//         console.log("* " + eachWord + emptySpaces + " *")
//     }
// }    

 // function displayWord(word){
                //     const numberOfSpaceToAdd = lengthOfLongestWord - word.length + 1;
                //     const emptySpaces= " ".repeat(numberOfSpaceToAdd);
                //     console.log( "* " + word + emptySpaces + "*");

                // }








//console.log(topAndBottomRowOfStars);

// theTopandBottomRow();
// function theTopandBottomRow(){
//     console.log(topAndBottomRowOfStars);
// }



















// // displayRows();
// // function displayRows(){
// //     const topBottomRowOfStars = createFirstRow();
// //     console.log(topBottomRowOfStars);
// //     for (const word of theArray){
// //         displayWord(word);
// //     }
// //     console.log(topBottomRowOfStars);
// // }

// //makeTopBottomStars();

// // forFun()
// // function forFun(){
//     //     const makingTopBottomStars = makeTopBottomStars();
//     //     console.log(makingTopBottomStars);
    
    
//     //     console.log(makingTopBottomStars);
//     // 
//     //makeTopBottomStars();

//     //findLongestWord();
//     function findLongestWord(){
//         const longestWordinArray= 0;
//         for(let i=0; i<theArray.length; i++){
//             let currentWordIterated = theArray[i].length 
//             if(currentWordIterated>longestWordinArray){
//                 longestWordinArray= currentWordIterated +3;   //7
//             } //console.log(longestWordinArray) 
//         }
//         return longestWordinArray
//     }
    

//     topBottomRowsOfStars()
//     function topBottomRowsOfStars(){
//         let star="*";
//         for(let i=0;i<longestWordinArray.length;i++){
//             console.log(star.repeat(longestWordinArray));
//         }
//     }
    
    
    
    
    // function makeTopBottomStars(){
    //     let star = "*";
    //     const theLongestWord = findLongestWord()
    //     for(let i=0; i<theLongestWord; i++){
    //         console.log(star.repeat(theLongestWord));
    //     }
    // }





// const question= prompt("Please add some words seperated by commas");
// const theArray= question.split(",");

// // theArray.forEach(log)
// // function log(word){
    // //     console.log(word);
    // // }
    // //find the longest word
    
    // const lengthOfLongestWord = getLengthOfLongestWord();// here it is a global variable
    // displayRows();
    // function displayRows(){
        //     const topBottomRowOfStars = createFirstRow();
        //     console.log(topBottomRowOfStars);
        //     for (const word of theArray){
            //         displayWord(word);
            //     }
            //     console.log(topBottomRowOfStars);
            // }
            
            // function displayWord(word){
                //     const numberOfSpaceToAdd = lengthOfLongestWord - word.length + 1;
                //     const emptySpaces= " ".repeat(numberOfSpaceToAdd);
                //     console.log( "* " + word + emptySpaces + "*");
                // }
                
                // function getLengthOfLongestWord(){
                    //     let lengthOfLongestWord=0;
                    //     for( const word of theArray){
                        //         console.log(word);
                        //         const wordLength = word.length;
                        //         if(wordLength>lengthOfLongestWord){
                            //             lengthOfLongestWord=wordLength;
                            //         }
                            //     } return lengthOfLongestWord;
                            // }
                            
                            // function createFirstRow(){
                                // const numberOfStarsOnFirstRow = lengthOfLongestWord + 4;
                                // let row = "";
                                // for(let i=0; i<numberOfStarsOnFirstRow; i++){
                                    //     row= row +"*";
                                    //     } 
                                    //     return row;
                                    // }
                                    
                                    
                                    
                                    
                                    
                                    // function log(word){
                                        //     console.log(word);
                                        // }
                                        // theArray.forEach(log);
                                        
                                        // let lengthOfLongestWord= 0;
                                        // for(word of theArray){
                                            //     console.log(word);
                                            //     const wordLength= word.length;
                                            //     console.log(wordLength);
                                            //     if(wordLength > lengthOfLongestWord){
                                                //         lengthOfLongestWord = wordLength;
                                                //     }
                                                // }
                                                // console.log("The biggest words has", lengthOfLongestWord, "characters")
                                                
                                                
                                                
                                                // function letsMakeStars(){
                                                    //     let biggestword
                                                    //     for(let i=0; i<myArray.length; i++){
                                                        //         biggestword=myArray[i].length;
                                                        //         console.log(biggestword);
                                                        //     }
                                                        // }
                                                        // letsMakeStars();
                                                        

                                                        // function letsMakeTheBorder(){
                                                            //     for(myArray[4])
                                                            // }
                                                            
                                                            
                                                            
                                                            
                                                            
                                                            
                                                            
                                                            
                                                            
                                                            
                                                            















































































// const answer = prompt("type a few words seperate by commas");
// const words = answer.split(",");
// console.log(words);

// prompt("Please add several words seperated by commas");

// const myArray = ["Hello", "David", "remember", "you", "won't", "give", "up!"];
// let n = 9;
// let string = "";

// myArray[2].length

// function newFunction() {
//     let bigger = 0
//     for (let i = 0; i < myArray.length; i++) {
//         let current = myArray[i].length;
//         console.log(myArray[i]);
//         if (bigger < current) {
//             bigger = current
//             console.log("is bigger < current.length", bigger, current.length)
//         } else {
//             console.log("no the bigger value is", bigger)
//         }
//     }
//     return bigger
// }


// //to create the frame of the stars
// function elementOfArray(){
//     let bigger2 = newFunction();
//     let space = " ";
//     debugger
//     for(let i=0; i<myArray.length; i++){
//     console.log("*"+ myArray[i]+`${space.repeat(bigger2-myArray[i].length)}`+"*");
// }
// }

// elementOfArray();





// function myStars(myArray) {
//     var border = "";
//     for (i = 0; i < console.log(my); i++) {
//         myArray.forEach(x => console.log(x));
//         border += "*"
//     }
//     return border
// }
// for (let i = 0; i < n; i++) { // external loop
//     for (let j = 0; j < n; j++) { // internal loop
//         if (i === 0 || i === n - 1) {
//             string += "*";
//         }
//         else {
//             if (j === 0 || j === n - 1) {
//                 string += "*";
//             }
//             else {
//                 string += " ";
//             }
//         }
//     }
//     // newline after each row
//     string += "\n";
// }

// // const inTheMorning= "I need to";
// // const action1= "wake up early";
// // const andThen= "and learn Mishna with a iced coffee";

// // const ideal="Woke up on time";
// // const notIdeal="Woke up late";
// // const actual="Woke up on time";

// // if (ideal !== notIdeal){
// //     alert("! g e t g o i n !")
// // }

// const arrayPractice =[["love","coffee","chocolate","music"],
// ["songs", "dancing", "Torah", "Sunrise"]];

// const arrayPractice2 = ["toys","candy","swimming","trips"]

// console.log(arrayPractice[1][2]);

// const greatThings = arrayPractice.concat(arrayPractice2);
// console.log(greatThings);

// let practiceConstructor = arrayPractice.constructor;
// document.getElementById("demo").innerHTML = text;

// const practiceEntries = arrayPractice2.entries();
// console.log(practiceEntries);

// for (let x of practiceEntries) {
//     document.getElementById("demo").innerHTML += x + "<br>";
//   }
// console.log(x);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();

// const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// console.log(moreFruits[3]);

// const name = "Fear";
// if (name === "David") {
//     alert("Tell your fears to shut it")
// } else {
//     alert("time to pack it up")
// }
// const timeToWakeUp= 5;
// const timeYouWokeUp=5;

// if(timeToWakeUp===timeYouWokeUp){
//     alert("Good Job David")
// }   else {
//     alert("Work Out!")
// }

// const moneyMadeAsTeacher = 8000;
// const moneyYouCanMake = 15000;

// if(moneyMadeAsTeacher===moneyYouCanMake){
//     alert("The Heck with this")
// }   else {
//     alert ("Let's keep pushing")
// }

// const name = "Billy";
// if (name ==="Billy"){
//     alert("hi Billy!");
// }   else if (name === "Susy") {
//     alert("hi Susy!");
// }   else {
//     alert("I don't know you");
// }

