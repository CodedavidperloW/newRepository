// function sayHello(){
//     console.log("I have to look at functions, like an alert. It will only show this message if I type sayHello()");
// }

// sayHello();

// //Function Expression
// //Anoynomous Function
// var sayBye = function(){
//     console.log("Bye");
// }

// sayBye();

// function sing(){
//     console.log("Tov L'hodot Hashem");
//     console.log("Oo'Lzamer L'Shimcha Ellyon");
// }

// function sing(song){
//     console.log(song);
// }

// sing("Shalom Aleichem");
// sing("Menucha V'Simcha");
// sing("Ki Eshm'ra Shabbat");

// function sayHello(){
//     console.log("Hello");
// }
// sayHello();

// //function expression

// const sayBye = function(){
//     console.log("Bye");
// }

// sayBye();


// function sing(song){
//     console.log(song);
// }

// sing("L'cha Dodi");
// sing("Tov L'Hodot");
// sing("Menucha B'Simcha");

// function multiply(a,b){
//     if(a>10 || b>10){
//         return "that's too hard";
//     } else { 
//     return alert(a*b);
//     }
//     return
// }

// multiply(2,12);

// function myFunction(){
//     alert("hello");
// }

// function mySecondFunction(){
//     prompt("Making Functions");
// }

// var database = [
//     {
//         username: "Yonit",
//         password: "cool",
//     },
//     {
//         username: "David",
//         password: "cool2",
//     },
//     {
//         username: "Dad",
//         password: "theBest",
//     },
//     {
//         username: "Heart",
//         password: "hurting",
//     }
// ];

// const newsFeed = [
//     {
//         username: "Dad",
//         timeline: "So tired",
//     },
//     {
//         username: "Heart",
//         timeline: "Javascript is cool"
//     },
//     {
//         username: "Friend",
//         timeline: "What\'s up?",
//     }
// ]

// const userNameSignIn = prompt("Please enter your username");
// const userNamePassWord = prompt("Please enter your password");

// signIn(userNameSignIn,userNamePassWord);

// function isItTheRightPerson(username, password){
//     for (let i =0; i<database.length; i++){
//         if(database[i].username===username &&
//             database[i].password===password){
//                 return true
//             }
//         }
//         return false
//     }
    
//     function signIn(username, password) {
//     if (isItTheRightPerson(username,password)){
//         console.log(newsFeed);
//     }    else {alert("Please sign in again");}
//     }


// var question = "What is your name?"

// function determineAge (myAge){
//     const mommyAge = myAge*2;
//     console.log(mommyAge);
//     const daddyAge = mommyAge*1.2;
//     console.log(daddyAge);
// }

// function newAge (myAge){
//     let momsAge = myAge*2;
//     console.log(momsAge);
//     return momsAge;
// }

// let momsAge= newAge(38);
// console.log(momsAge);

// function betterAtIt(myAge){
    //     let myMommy = myAge*2;
    //     console.log(myMommy);
    //     let myPapa = myMommy*1.2;
    //     console.log(myPapa);
    // }
    
    // betterAtIt(38);
    
    // function readyFunction(myAge){
    //     let momAge = myAge*2;
    //     return momAge;
    // }
    
    // let momAge = readyFunction(38);
    
    // let momsAge= newAge(38);
    // console.log(momsAge);
    
    
// const prices = [20, 20, 10 ,4];

// function determinePrice(){
//     let sum=0;
//     for(let i=0; i<prices.length;i++){
//         sum = sum + prices[i];
//     }
//     return sum;
// }

// function checkForTip(){
//     let tip;
//     const totalPrice = determinePrice();
//     if(totalPrice>100){
//         tip=20;
//     }else{
//         tip=5;
//     }
// }
// checkForTip();


// You are the manager of the chocolate factory, in order to make your clients happy you will send them a gift depending on their quantity of chocolate box they ordered.

// Create a function named checkQuantityOrder, that takes one parameter, the quantity the user ordered.

// If the client ordered more between 5 and 10 boxes (included) console.log "Dear client, you won a bouquet of flowers"
// If the client ordered more between 10 and 20 boxes (included) console.log "Dear client, you won a bottle of wine"
// If the client ordered more than 20 boxes (included) console.log "Dear client, you won a trip to Paris"
// Call the function a few times,



// function checkQuantityOrder(quantity){
//     if(quantity>=5 && quantity<=10){
//         console.log('Dear client, you won a bouquet of flowers');
//     }else if(quantity>=10 && quantity<=20){
//         console.log('Dear client, you won a bottle of wine');
//     }else if(quantity>=20){
//         console.log('Dear client, you won a trip to Paris');
//     }
// }

// checkQuantityOrder(8);
// checkQuantityOrder(15);
// checkQuantityOrder(30);
// checkQuantityOrder(5);
// checkQuantityOrder(11);
// checkQuantityOrder(21);








const colors = ["blue", "lightgreen", "red", "yellow"];
for (let i=0; i<colors.length; i++){
    const color = colors[i];
    for (let j=0;j<color.length; j++){
         
    }    
}
















//     function calcPrice(price1, price2, price3, price4){
//         console.log(price1+price2+price3+price4);
//     }
//    calcPrice(20,20,10,4);

    // function howMuchTip() {
    //     if(calcPrice>100){
    //         console.log(calcPrice+25)
    //     } else if (calcPrice<100){
    //         console.log(prompt("How much would you like to add?"))
    //     }
    // }






// var userNamePrompt = prompt("What's your username?");
// var passwordPrompt = prompt("What's your password?");

// signIn(userNamePrompt, passwordPrompt);

// function isUserValid(username, password) {
//     for (let i = 0; i < database.length; i++) {
//         if (database[i].username === username &
//             database[i].password === password) {
//             return true;
//         }
//     }
//     return false;
// }

// function signIn(username, password) {
// if (database[i].username === username &&
//     database[i].password) {
//     console.log(newsFeed);
// } else {
//     alert("Sorry, wrong username and password.")
// }
// }


// if (user === database[0].username && pass === database[0].password) {

//     return newsFeed;
// } else { alert("sign in again");
//  }


// signIn(userNamePrompt, passwordPrompt);































// // // // const var1 = "Hello";

// // // // function myFunc(){
// // // //     const var2 = "World!";
// // // //     console.log(var1);
// // // //     console.log(var2);
// // // // }

// // // // function addTwoNumbers(a,b){
// // // //     const sum = a + b;
// // // //     return sum;
// // // //     console.log()
// // // // }

// // // // const newSum = addTwoNumbers(1,2);
// // // // console.log(newSum);
// // // // console.log(sum);

// // // // function add(a,b){
// // // //     return a+b;
// // // // }

// // // // function sum (){
// // // //     return arguments;
// // // // }
// // // // function sum(){
// // // //     return sum(1,2,3);
// // // // }


// // // // //function declaration
// // // // function HelloWorld(){
// // // //     console.log("Hello World");
// // // // }
// // // // HelloWorld();

// // // // function greet(){
// // // //     console.log('hello there');
// // // // }
// // // // greet();


// // // // //function expression
// // // // //const speak = function(){
// // // //  //   console.log('good day!');
// // // // //};

// // // // //speak();

// // // // var functionName = () =>
// // // //     console.log("Hello World");


// // // // var idname ="David";
// // // // const greeting ="Hello";
// // // // console.log(greeting +" "+ idname);

// // // // let age =38;
// // // // console.log("You're" + age);
// // // // //Currently reads in console
// // // // // You're38 without a "space"
// // // // // How do I render You're 38.
// // // // //Something with $, ?

// // // // userScore = 4;
// // // // var userScore;
// // // // console.log(userScore);

// // // // function doSomething(){
// // // //     var someVar ="Basketball";
// // // // }
// // // // //console.log(someVar);
// // // // //The above code teaches me that a variable inside a function can't work.

// // // // function listFruits (){
// // // //     if(true){
// // // //         const fruit1 ="orange";
// // // //         let fruit2 = "avocado";
// // // //         var fruit3 = "banana";
// // // //     }
// // // // }

// // // // var idname="David";
// // // // console.log(idname);
// // // // console.log(greeting);
// // // // console.log(greeting+idname);

// // // // function func(){
// // // // //x is known here but not defined.
// // // // console.log('value of x here: ',x)
// // // // {
// // // //     var x = 10;
// // // //     x = x +5;
// // // // }
// // // // // x is still known here and has a value.
// // // // console.log('value of x after for block: ', x)
// // // // }
// // // // // x is NOT known here.
// // // // func()

// // // // // const speak = function(time, name){
// // // // //     console.log(`good ${time} ${name} you are doing great!`);
// // // // // }
// // // // // console.log(speak);
// // // // // speak('afternoon','David');
// // // // ///Above, ('David') is the argument, here we are passing
// // // // //a value "David" into a function that
// // // // //can be used.

// // // // const speak = function(time='day', name='to you,'){
// // // //     console.log(`good ${time} ${name} you are doing great!`);
// // // // }
// // // // console.log(speak);
// // // // speak();

// // // // //var
// // // // function func(){
// // // //     console.log('value of x here: ', x)
// // // // {
// // // // var x = 10;
// // // // x = x+5;
// // // // }
// // // // //x is still known here and has a value.
// // // // console.log('value of x after for block: ', x)
// // // // }
// // // // // x is NOT known here
// // // // func()

// // // // // let mango = "yellow"
// // // // // if (mango==="yellow"){
// // // // //     let mango = "blue"
// // // // //     console.log(mango)
// // // // // }
// // // // // console.log(mango);//why does it bring back "yellow," because
// // // // //let only works within the curly brackets, the block. Outside
// // // // //of which it doesn't have use.

// // // // var mango="yellow"
// // // // if (mango ==="yellow"){
// // // //     var mango ="blue"
// // // //     console.log(mango)
// // // // // }
// // // // // console.log(mango);

// // // // // //callback function
// // // // // let people = ['David','Yonit','Ruth Esther','Michael Avraham','Hadar Chana']

// // // // // function fntName(){
// // // // //     //statements
// // // // // }
// // // // // function drinkCoffee(){
// // // // //     console.log("The user drinks coffee in the morning");
// // // // // }

// // // // // //with parameters
// // // // // function myFunc(param1,param2,){
// // // // //     //statement
// // // // // }

// // // // // function userInfo (userName, userAge){
// // // // //     console.log("My name is"+userName + ", my age is " +userAge);
// // // // // }

// // // // const calcArea = function(radius){
// // // //     let area = 3.14 * radius **2;
// // // //     return area;
// // // // }

// // // // const area = calcArea(5);
// // // // console.log

// // // // function calculus (){
// // // //     console.log(1+2);
// // // // }

// // // // calculus();

// // // // function userInfo(userName, userAge){
// // // //     console.log("My name is " + userName + ", my age is " + userAge);
// // // // }

// // // // userInfo("Sarah", 22);
// // // // userInfo("Ben", 40);

// // // // function calculusSecond (a,b,c){
// // // //     console.log(a+b+c);
// // // // }
// // // // // calculusSecond(2,4,6);

// // // // //Default Values
// // // // function userInfo(userName, userAge=26){
// // // //     console.log("My name is " + userName + ", my age is " + userAge);
// // // // }
// // // // userInfo("David");
// // // // userInfo("Jordan", 39);

// // // // let eyeColor = "blue";

// // // // function userMoreInfo (userName, userAge){
// // // //     console.log("My name is " + userName + ", my age is " + userAge + ", I have " + eyeColor + " eyes");
// // // // }

// // // // userMoreInfo("David",38);

// // // // function favoriteColor(){
// // // //     console.log("My favorite color is " + eyeColor)
// // // // }

// // // // const calcArea = function(radius){
// // // //     let area = 3.14 * radius **2;
// // // //     return area;
// // // // }

// // // // const area = calcArea(5);
// // // // console.log

// // // // function Exercise1(myAge){
// // // //     let mumAge = myAge*2;
// // // //     return mumAge;
// // // // }
// // // // const mumAge = Exercise1(38);

// // // // function Exercise2(mumAge){
// // // //     let dadAge = mumAge*1.2;
// // // //     return dadAge;
// // // // }
// // // // const dadAge = Exercise2(mumAge);
// // // // console.log();
// // // //Using return
// // // // function userInfo(userName, userAge) {
// // // //     let result = "My name is " + userName + ", my age is " + userAge;
// // // //     return result;
// // // // }
// // // // let girlInfo = userInfo("Sarah", 22);
// // // // console.log(girlInfo);

// // // // function userInfo(userName, userAge) {
// // // //     if (userName === "Sarah") {
// // // //         let result = "Hey" + userName;
// // // //         return result;
// // // //     } else {
// // // //         return "You are not the right person"
// // // //     }
// // // // }
// // // // let girlInfo = userInfo("Donnie", 22);
// // // // console.log(girlInfo)

// // // // function userInfo(userName, userAge){
// // // //     let result = "My name is " +userName + " my age is " + userAge;
// // // //     return "hey";
// // // //     console.log(result);
// // // // }

// // function userInfo(userName, userAge) {
// //     if (userName !== "Sarah") {
// //         alert("You are not the right person");
// //     }
// //     else if (userName === "Sarah") {
// //         alert("It's great to see you");
// //     let result = "Now " + userName + " your age is " + userAge + " but know you can do anything!";
// //     return result
// // }
// // }
// // let girlInfo = userInfo("Sarah", 22);
// // console.log(girlInfo);


// // // // function Exercise1(myAge){
// // // //     let mumAge = myAge*2;
// // // //     return mumAge;
// // // // }
// // // let myAge=38;
// // // function java(myAge){
// // //     let mumAge = myAge*2;
// // //     return mumAge;
// // // }
// // // const mumAge = java(myAge);
// // // console.log(mumAge);

// // // const speak = function (name="Noam", day="Tuesday", time="13:30", game="basketball"){
// // //     console.log(`Good day ${name} what are you doing on ${day} at ${time}? Do you want to play ${game}?`);
// // // };

// // // speak("Michael", "Wednesday", "16:15", "tennis");
// // // console.log();

// // const calcArea = function(radius){
// //     return 3.14 * radius **2;
// // }

// // const calcArea = (radius) =>{
// //     return 3.14 * radius **2;
// // };

// // const area = calcArea(5);
// // console.log('area is:', area);

// // //Objects Methods
// // let person = {
// //     firstName : "Sarah",
// //     eyeColor:   "blue",
// //     eat:        function (){
// //         console.log("I love chocolate")
// //     }
// // }

// // let person = {
// //     firstName: "Sarah",
// //     eyeColor: "blue",
// //     eat: function () {
// //         console.log("My name is " + this.firstName + "I love chocolate")
// //     }
// // }