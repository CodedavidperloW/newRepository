const maxNumber = 6

for (let i = 0; i < maxNumber; i++) {
    let star = "*"
    if (i === 0){ console.log(star) }
    else if(i=== 1){console.log(star.repeat(2))}
    else if(i=== 2){console.log(star.repeat(3))}
    else if(i=== 3){console.log(star.repeat(4))}
    else if(i=== 4){console.log(star.repeat(5))}
    else if(i=== 5){console.log(star.repeat(6))}
    else if(i=== 6){console.log(star.repeat(7))}
}



// const count = 0;
// ////const myString = ['*','**','***','****','*****','******'];
// const myString = [0, 1, 2, 3, 4, 5,]
// for (item of myString) {
//     console.log("count",count++)
//     if (myString[0] < 6) {
//         console.log('*'.repeat(1));
//     } if (myString[1] < 6) {
//         console.log('*'.repeat(2));
//         if (myString[2] < 6) {
//             console.log('*'.repeat(3));
//             if (myString[3] < 6) {
//                 console.log('*'.repeat(4));
//                 if (myString[4] < 6) {
//                     console.log('*'.repeat(5));
//                     if (myString[5] < 6) {
//                         console.log('*'.repeat(6));
//                     }}}}}}


//<!----DailyChallenge GOLD

// const myString =[1,2,3,4,5,6];
// console.log(myString);
// for(item of myString){
//     if(item<=6){
//         console.log('*'.repeat(item));
//     }
// }

// const numbers = [5,0,9,1,7,4,2,6,3,8];
// var myArrToString= numbers.toString();
// console.log(myArrToString);
// let myNewArrToString = numbers.join('+');
// console.log(myNewArrToString);



