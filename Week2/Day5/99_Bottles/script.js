//TEST One Hour
let askForBeers = Number(prompt("How many beers?"));


loopDownToZero();

function loopDownToZero(){
    while (askForBeers>0){
        let makeTheSong = letsMakeTheSong(askForBeers);
        console.log(makeTheSong);
        askForBeers= askForBeers-1;
    }
}

function letsMakeTheSong(){
singularOrMultipleBottles =  (askForBeers-1>1) ? "bottles" : "bottle";
changeThePronoun = (askForBeers===1) ? "it" : "them";
let theStanza = `${askForBeers} ${singularOrMultipleBottles} of beer on the wall
${askForBeers}  ${singularOrMultipleBottles} of beer
Take 1 down, pass ${changeThePronoun} around
${askForBeers-1}  ${singularOrMultipleBottles} of beer on the wall`;
return theStanza

}



















// let howManyBottles = Number(prompt("How many Beers?"));

// completeTheSong();
// function completeTheSong(){
//     while(howManyBottles>0){
//         const makingTheSong = makeTheSong(howManyBottles);
//         console.log(makingTheSong);
//         howManyBottles=howManyBottles-1; 
//     }
// }


// function makeTheSong(){

// singularOrPlural =  (howManyBottles-1 > 1) ? "bottles":"bottle";

// pronounItOrThem =   (howManyBottles===1) ? "it":"them";

// const stanza = `${howManyBottles} ${singularOrPlural} of beer on the wall
// ${howManyBottles} of beer
// Take 1 down, pass ${pronounItOrThem} around
// ${howManyBottles-1} ${singularOrPlural} of beer on the wall.`

// return stanza
// }


// let askforNumberofBeers = Number(prompt("How many beers?"));

// completeTheSong();

// function completeTheSong(){
//     while (askforNumberofBeers > 0) {                               //  Here we will make a while
//         const stanza = makeTheStanza(askforNumberofBeers);          //  loop to keep console.logging
//         console.log(stanza);                                        //  until we get to zero.
//         askforNumberofBeers = askforNumberofBeers - 1;
//     }
// }
    
// function makeTheStanza() {
//     isItPlural = (askforNumberofBeers - 1 > 1) ? "bottles" : "bottle";
//     itIsSingular = (askforNumberofBeers<=1) ? "bottle" : "bottles";
//     forThePronoun = (askforNumberofBeers===1) ? "it"   : "them";

//     let theSong = `${askforNumberofBeers} ${itIsSingular} of beer on the wall;
//     ${askforNumberofBeers} ${itIsSingular} of beer
//     Take 1 down, pass ${forThePronoun} around
//     ${askforNumberofBeers - 1} ${isItPlural} of beer on the wall.`
//     //console.log(theSong)
//     return theSong
// }















// const numberOfBeers = Number(prompt("How many beers?"));

// const stanza = makeStanza(numberOfBeers);


// function makeStanza(num) {
//     console.log("is this number more than one?", isPlural(num));
//     const bottleOrBottles = getBottleOrBottles(num)

//     const stanza = `${num} ${bottleOrBottles} of beer on the wall
//     ${num} ${bottleOrBottles} bottles of beer
//     Take 1 down, pass it around
//     ${num - 1} ${getBottleOrBottles(num - 1)} of beer on the wall.`;

//     return stanza;
// }

// function isPlural(num) {
//     if (num > 1) {
//         return true
//     } else {
//         return false;
//     }
// }

// function getBottleOrBottles(num) {
//     if (isPlural(num)) {
//         return "bottles";
//     } else {
//         return "bottle";
//     }
// }

// console.log("stanza", stanza)

//אחד אני יודע