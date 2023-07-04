//test 45 minutes

// let jump= "You can jump with your kids on Shabbat if they want to play with you."
// function isItBlank(str){
//     if(str ===""){
//         console.log("yes it's blank")
//         return true
//     }else(console.log(`no it is not blank`))
// }

// isItBlank(jump)


// let names= "David Perlow"

// function abbreviateName(enterName){
//     enterName=enterName.split(" ")
//     let firstName=enterName[0]
//     let lastNameAbbreviated= enterName[1][0]+"."
//     console.log(firstName,lastNameAbbreviated)
// }
// abbreviateName(names)

//Exercise 3: SwapCase

// let thisString = "Practice helps Sooo Much"
// function switchTheSize(theString) {
//     let newLetters = ''
//     for (let i = 0; i < theString.length; i++) {
//         if (theString[i] === theString[i].toUpperCase()) {
//             newLetters += theString[i].toLowerCase()
//         } else (newLetters += theString[i].toUpperCase())
//     }
//     console.log(newLetters)
// }
// switchTheSize(thisString)

//Exercise 4: Omnipresent

let sampleArray = [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]

function testIt(str,val){
    for(let i=0; i<sampleArray.length; i++){
        if(str[i].includes(val)){
            console.log(`Yes, ${val} repeats`)
            return true
        }else(console.log(`No, ${val} doesn't repeat.`))
        return false
    }
}

testIt(sampleArray,4)




// function isItBlank(str){
//     if(str===""){
//         console.log("It's blank");
//         return true;
//     }else{
//         console.log("It is not blank, it says:", str);
//         return false;
//     }
// }

// let jump = "Jumping is allowed on Shabbat if your kids want you to play with them."

// isItBlank(jump)


// function abbrevName(anyName){
//     anyName=anyName.split(" ")
//     let firstName = anyName[0]
//     let secondInitial = anyName[1][0]+"."
//     console.log(firstName, secondInitial )
// }

// abbrevName("David Perlow")


//Ex 3: Swapcase
//search for upper case
//search for lower case

//new variable to lowercase
//new variable to uppercase

// let textExample = "My Name Is David Perlow"

// function swapSize(str){
//     let newLetters = ''
//     for(let i=0;i<str.length;i++){
//         if(str[i]===str[i].toUpperCase()){
//             newLetters += str[i].toLowerCase()
//         }else(newLetters += str[i].toUpperCase())
//     }
// console.log(newLetters)
// }

// swapSize(textExample)

//ex 4: Omnipresent Value

// let array1 =[[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]

// function isItOmnipresent(arr, val){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i].includes(val)){
//             console.log(`Yes ${val} repeats`)
//         }else(console.log(`No ${val} doesn't repeat.`))
//     }
// }

// isItOmnipresent(array1, 3)








// function checkTheString(string){
// if(string ===""){
//     console.log(true)}
//     else{
//         console.log(false)
//     }
// }
// const stringEx= ""

// checkTheString(stringEx)



// const fullName= "Ruth Perlow"


// function abbrevName(fullName){
//     const nameToString = fullName.split(" ")
//     const firstName = nameToString[0]
//     const getFirstInitial = nameToString[1][0]
//     console.log(firstName,getFirstInitial, ".");
// }
// abbrevName(fullName)



// const dan = "nOw iS tHe time!"
// function swapcase(str){
//     let newLetters = '' // this will replace the letters
//     for(let i=0; i<str.length; i++){
//         if(str[i]==str[i].toUpperCase()){
//             newLetters += str[i].toLowerCase();
//         } else {
//             newLetters += str[i].toUpperCase();
//         }
//     }console.log(newLetters);
// }

// swapcase(dan);



// const phrase = "This will pass AnD GooD ThINGS will happen!"

// function changeThePhrase(str){
//     let newLetters= ''
//     for(let i=0;i<str.length;i++){
//         if(str[i]===str[i].toUpperCase()){
//             newLetters+=str[i].toLowerCase();
//         }else{
//             newLetters+=str[i].toUpperCase();
//         }
//     }console.log(newLetters);
// }
// changeThePhrase(phrase)

// const newArray = [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]

// function findOmnipresent(theArray,theValue){
//     for(let i=0; i<theArray.length;i++){
//         if(!theArray[i].includes(theValue)){
//             console.log(false)
//             return false
//         }else{console.log(true)}
//     }return true
// }

// findOmnipresent(newArray,8)