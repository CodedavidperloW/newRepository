// function compareToTen(num) {
//     return new Promise((resolve, reject) => {
//         if (num <= 10) {
//             resolve("Number is less than or equal to 10!");
//         } else {
//             reject("Number is greater than 10!");
//         }
//     });
// }

// // compareToTen(7)
// //   .then((message) => {
// //     console.log("Success:", message);
// //   })
// //   .catch((message) => {
// //     console.log("Error:", message);
// //   });

// compareToTen(2)
//     .then(result => console.log(result))
//     .catch(error => console.log(error))


//Exercise 2

// function delayResolve() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("success");
//         }, 4000);
//     });
// }

// delayResolve()
//     .then(result => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error(error);
//     })

//Exercise 3: Resolve & Reject

// function valueOfThree() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(3);
//         }, 3000);
//     });
// }

// valueOfThree()
//     .then(result => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })











