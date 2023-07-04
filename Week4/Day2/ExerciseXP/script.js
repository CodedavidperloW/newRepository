//Exercise 1

// const findTheSum = (a,b)=>{
//     console.log(a+b)
// }
// findTheSum(2,3)

//Exercise 2

// const transformToGrams = (a)=>{
//     const grams = a*1000;
//     console.log(grams)
// }

// transformToGrams(3)

//Exercise 3
// const fortuneTeller =(children, wife, location, career) =>{
//     const sentence= `You will be a ${career} and live in ${location} with ${wife} and your ${children}`
//     console.log(sentence)
// }

// fortuneTeller(3, "Yonit", "Yad Binyamin", "Web Developer")


// (function(children, wife, location, career) {
//     const sentence = `You will be a ${career} and live in ${location} with ${wife} and your ${children} kids.`;
//     console.log(sentence);
// })(3, "Yonit", "Yad Binyamin", "Web Developer");

//Exercise 4
// (function(name){
//     let userName = document.getElementsByClassName('navbar-brand')[0];
//     let newNavAddOn = document.createElement('div');
//     newNavAddOn.innerHTML=
//     `<span>${name}</span>
//     <img src="./Pics/DavidProfile.jpg" alt=David width="50" height="50"></img>`

//     userName.appendChild(newNavAddOn)
// })('David');

//Exercise 5

// function makeJuice(sizeDrink){
//     const ingredients= []
//     function addIngredients(ing1, ing2, ing3) {
//         ingredients.push(ing1,ing2,ing3)
//     }
//     function displayJuice(){
//         console.log(`The client wants a ${sizeDrink} including ${ing1},${ing2},${ing3}`);

//     }
//     addIngredients("protein", "vitamin C", "energy-mix");
//     addIngredients("herbs", "vitamin C", "relax-mix");
//     displayJuice()
// }

// makeJuice("medium")

// function makeJuice(sizeDrink) {
//     const ingredients = [];
  
//     function addIngredients(ing1, ing2, ing3) {
//       ingredients.push(ing1, ing2, ing3);
//     }
  
//     function displayJuice() {
//       console.log(`The client wants a ${sizeDrink} including ${ingredients.join(", ")}`);
//     }
  
//     addIngredients("protein", "vitamin C", "energy-mix");
//     addIngredients("herbs", "vitamin C", "relax-mix");
//     displayJuice();
//   }
  
//   makeJuice("medium");