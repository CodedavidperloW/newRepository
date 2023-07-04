// //Exericse 1: BMI

// let Height
// let Mass

// const obj1 = {
//     fullName: "David Perlow",
//     mass: 81.6,
//     height: 1.85,
//     totalBMI: function () {
//         (this.mass) / (this.height * this.height)
//     }
// }

// const obj2 = {
//         fullName: "Yonit Perlow",
//         mass: 73,
//         height: 1.65,
//         totalBMI: function () {
//             (this.mass) / (this.height * this.height)
//         }
//     }

// function findLargestBMI(){
//     if(obj1.totalBMI>obj2.totalBMI){
//         console.log(`The largest BMI is", ${obj1.fullName}`)
//     } else{console.log(`The largest BMI is: ${obj2.fullName}`)
//     }
// }
// findLargestBMI()


//Exercise 2: Grade Average

let grades = [60, 75, 86, 90, 55, 95]
let sum = 0;
function getGrade(score) {
    for (let i = 0; i < score.length; i++) {
        let individualScore = score[i]
        sum = sum += individualScore
        let average = sum / score.length
        console.log(average)
    
    if (average > 65) {
        console.log("Congrats, you passed")
    } else {
        console.log("You must repeat the course.")
    }
}
}

getGrade(grades)







// //Exercise 1 BMI
// let Height
// let Mass

// const object1 = {
//     fullName: "David",
//     Mass: 81.6,
//     Height: 1.85,
//     TotalBMI: function () {
//         return (this.Mass) / (this.Height * this.Height);
//     }
// };

// console.log(object1);
// console.log(Object.values(object1), object1.TotalBMI())

// //Exercise 2
// let grades = [60,75,86,90,55,95]
// findAvg();
// function findAvg(){
//     let sum = 0
//     for(let i=0;i<grades.length;i++){
//         let score = grades[i];
//         sum = score+sum
//         console.log(`The total sum is :, ${sum}`)
//         let average = sum/grades.length
//         console.log(`The average score is: ${average}`);
//         if(average>65){
//             console.log("Congrajulations you passed the course!")
//         } else{ console.log("You need to repeat the course.")}
//     }
// }


// const bmi = calcBMI()
// function calcBMI() {
//     let calcuation = Mass / Height * Height;
//     return calcuation
// }

// const object2 = { fullName: "Yonit", Mass: 81.6, Height: 1.78, TotalBMI: calcuation }
// console.log(object1)








// const object1 = {
//         let Mass
//         let Height
//         console.log(calcuation);
//         return calcuation
//     }
// }

// const object2 = {
//         let Mass
//         let Height
//         let calcuation = (Mass) / (Height * Height)
//         console.log(calcuation);
//     }
// }

// function bmi() {
//     let Mass
//     let Height
//     let calcuation = (Mass) / (Height * Height)
//     console.log(calcuation);
// }

// bmi(object1)