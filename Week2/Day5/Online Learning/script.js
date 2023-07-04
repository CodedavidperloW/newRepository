







//For Each Method

// let newArray = [2, 3, 4, 5, 6]; 

// newArray.forEach(function(number,i){
//     newArray[i] = newArray[i]*2;
// });


// newArray = [2, 3, 4, 5, 6];

// newArray.forEach(function(number,i){
//     newArray[i]= number*2;
// });


// newArray.forEach((element) => {
//     console.log(element);
// });


//For Each Method//

// let newArray = [2,3,4,5,6];
// newArray.forEach((element, index) => {
//     console.log(`The Current Index: ${index}`);
//     console.log(element);
// });

//Array Map Method//
//Calls a function on every element to generate a new element 
//then it is placed into a new array.

// let myArray= [1,2,3];

// let myNewArray= myArray.map(function(x){
//     return x*2;
// });

// console.log(myNewArray);

// let myArray= [1,2,3];

// let myNewArray = myArray.map((x)=>x*2);
// console.log(myNewArray);

// let myNewerarray = myNewArray.map((x)=>x+.5)
// console.log(myNewerarray);

// let myCurrentArray = myNewerarray.map((x)=>x*10)
// console.log(myCurrentArray);

// let anotherArrowArray = myCurrentArray.map((x)=>x*3);
// console.log(anotherArrowArray);

// //Ternary Operators
// let age = 19;
// let canDrive = age > 16 ? "yes" : "no";
// console.log(canDrive); //"yes"

// let go = 39;
// let youCanDoIt= go===39 ? "Have a lot of fun" : "Stay and keep working!"
// console.log(youCanDoIt);

// let speed = 90;
// let message = speed>=120 ? "Too Fast, slow down now" : (speed<=90 ? "Just Right" : "Speed Up")
// console.log(message);



// const item = {
//     rollerblades: 45,
//     artset: 58,
//     fishtank: 55,
// }
// let amountofCash = 36;
// let purchase = amountofCash>item.artset ? "You can buy it" : "Wait till you have the money"
// console.log(purchase);


//try..catch

// try {
//  alert('Start of try runs');
//  lalala;
//  alert('end of try');

// } catch (err) {
//     alert(`Error has occurred!`);
//     alert(err.name);
//     alert(err.message);
//     alert(err.stack);
//     alert(err);
//     console.log("Keep reviewing")

// }


function validateNumber(){
    try {
        for(let i=0;i<5;i++){
            console.log(i);
        }
    }
    catch(err){
        alert(err);
    }
}
validateNumber();
















