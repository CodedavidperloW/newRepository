// const firstArr = [1, 4, 9, 16];


// const myNewArray = firstArr.map((value, index)=>{
//     return value*2
// })
// console.log(myNewArray)

//Exercise 1: Analyzing
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

// //2
// const country = "USA";
// console.log([...country]);
// //3
// //------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);

// Exercise 2: Employees
// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// const welcomeStudents=[];
// const newSentence = users.map(function(user){
//    const addGreeting= `Hello ${user.firstName}`
//    welcomeStudents.push(addGreeting)
// })
// // console.log(welcomeStudents)


// // function filter(users, test){
// //     let passed = []
// //     for(let element of users){
// //         if(test(element)){
// //             passed.push(element);
// //         }
// //     }
// //     return passed
// // }

// let newPassedArray = users.filter(user => user.role==='Full Stack Resident').map(user=>user.lastName);
// console.log(newPassedArray)

//Exercise 3: Star Wars
//using reduce method
// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// const phrase = epic.reduce((accumulator, currentValue) => {
//    return accumulator +' '+ currentValue;
// });

// console.log(phrase)

//Exercise 4: Employees #2

// const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
//                {name: "Liam", course: "Computer Science", isPassed: false}, 
//                {name: "Jenner", course: "Information Technology", isPassed: true}, 
//                {name: "Marco", course: "Robotics", isPassed: true}, 
//                {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
//                {name: "Jamie", course: "Big Data", isPassed: false}];

// let newlyPassedStudents = students.filter(student=>student.isPassed===true).forEach(student=>(console.log(`Mazel Tov ${student.name} you passed ${student.course}!`)))
// console.log(newlyPassedStudents)


