//Exercise 1

const people = ["Greg", "Mary", "Devon", "James"];
// people.shift();
// console.log(people)
// people.splice(2,1,"Jason");
// console.log(people);
// people.push("David")
// console.log(people)
// console.log(people[0]);
// console.log(people)
// people.slice(1,3)

// people.indexOf("Foo",0);
// console.log(people);
// people.indexOf("Foo",0);

// let lastVariable = people.length-1
// console.log(lastVariable);

//Part 2- Loops
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// }


// for (let i = 0; i < people.length; i++) {
//     let selectedName = people[i];
//     if (selectedName === "Mary") {
//         break;
//     }
//     console.log(selectedName);

// }





//Exercise 2: Your Favorite Colors
// const myFaveColors = ["blue","black","orange","green","aqua"];
// for(let i=0;i<myFaveColors.length;i++){
//     const suffixes = ["st","nd","rd","th","th"]
//     let suffixSpecific = suffixes[i];
//     let selectedColor = myFaveColors[i];
//     let numberPreference = i+1
//     // I want a numerical value for each array
//     console.log(`My ${numberPreference}${suffixSpecific} choice is ${selectedColor}`)
// }

//Exercise 3: Repeat The Question

// let askForANum = Number(prompt("Please select a Number"));
// while(askForANum<10){
//     askForANum = Number(prompt("Please select a Number"));
// }

//Remember to save the prompt as a Number 
//in the beginning- see line 53.

//Exercise 4:

// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }
// console.log(building.numberOfFloors);
// console.log(building.numberOfAptByFloor.firstFloor+building.numberOfAptByFloor.thirdFloor)
// console.log((building.nameOfTenants[1]), building.numberOfRoomsAndRent.dan[0]);

// let rentOfSarah = building.numberOfRoomsAndRent.sarah[1]
// let rentOfDavid=building.numberOfRoomsAndRent.david[1];
// let totalRentForSarahAndDavid = rentOfSarah+rentOfDavid;

// let rentOfDan = building.numberOfRoomsAndRent.dan[1];

// if(totalRentForSarahAndDavid>rentOfDan){
//     building.numberOfRoomsAndRent.dan[1]=1200;
//     console.log(building.numberOfRoomsAndRent)
// }

//Exercise 5: Family
// let family ={
//     residence: "Yad Binyamin",
//     members: ["Yonit","David","Ruth Esther","Michael Avraham","Hadar Chana"],
//     since: 2012
// }
// for (let x in family){
//     console.log(x,family[x])
// }

//Exercise 6: Rudolf
// const details = {
//     my: 'name is David Perlow',
//     and: 'with G-ds help I',
//     will: 'not only get out of debt',
//     but: 'will support my family',
//     in: 'the best way possible'
//   }

//   for(let x in details){
//     console.log(x,details[x])
//   }

  //Exercise 7: Secret Group;
  const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
//get first initial of each index in the string.
const firstLetter = names.map(names=>names[0]);
const orderedInitials= firstLetter.sort().join();
console.log(orderedInitials);
const withOutComma= orderedInitials.replace(/,/g,"")
console.log(withOutComma);















// const people = ["Greg", "Mary", "Devon", "James"];
// console.log(people);
// console.log(people.shift());
// console.log(people.pop());
// console.log(people.push("David"));
// console.log(people[0]);
// console.log(people.splice(2,0,"Jason"));
// console.log(people.slice(1,3));
// console.log(people.indexOf("Foo",0));

//part 2

// for(let i=0; i < people.length; i++){
//     let individual = people[i];
//     if(individual==="Mary"){
//         break;
//     }
//     console.log(individual)
// }

// //Exercise 2
// const myColorArray = ["Blue","Orange","Green","Purple","White"]

// for(let i=0; i<myColorArray.length; i++){
//     let color = myColorArray[i];
//     let currentNumber = 1+i
//     console.log(`My #${currentNumber}choice is ${color}`)
// }

//Exercise 3
// let askForANumber = Number(prompt("Please select a Number"));
// ///let numericalValue = Number(askForANumber);
// while(askForANumber<10){
//     askForANumber=Number(prompt("Please select a Number"));
// }

// //Exercise 4
// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent: {
//         sarah: [3, 990],
//         dan: [4, 1000],
//         david: [1, 500],
//     },
// }

// console.log(building.numberOfFloors);
// console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);
// const secondTenant = building.nameOfTenants[1]
// console.log(secondTenant);
// const numberOfRooms = building.numberOfRoomsAndRent.dan[0];
// console.log(numberOfRooms);

// const totalRentForDavidAndSarah = building.numberOfRoomsAndRent.david[1] + building.numberOfRoomsAndRent.sarah[1];
// const rentOfDan = building.numberOfRoomsAndRent.dan[1];
// if (totalRentForDavidAndSarah > rentOfDan) {
//     newRentForDan= 1200
//     console.log(newRentForDan);
// }

// // //Exercise 5
// const myFamily = {name: "David", age:39 , hobby:"Music"};

// for(let x in myFamily){
//     //console.log([x]);
//     console.log([x]);
//     // console.log(myFamily.name);
//     // console.log(myFamily.age);
//     // console.log(myFamily.hobby);
// }

// for (let x in myFamily){
//     console.log([x]);
//     console.log(myFamily[x]);
// }

// //Exercise 6
// const details = {
//     myNameIs: 'David',
//     and: 'I can',
//     do: 'THIS'
//   }
//   for(let x in details){
//     console.log(details);
//     //console.log(details[x]);
//   }

// //Exercise 7 Secret Group
// let acronym=''
// let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// const sortedNames = names.sort();

// //I need to loop the array and get the first letter

// for(firstInitial of sortedNames){
//     console.log(firstInitial[0])
//     acronym= acronym+firstInitial[0];
// }
// console.log(acronym)



// const newAcronym = acronym.sort()