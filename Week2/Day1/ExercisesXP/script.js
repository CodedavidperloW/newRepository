//Exercise 1
var favoriteFood= "Pasta";
var favoriteMeal= "Dinner";
console.log(`I eat ${favoriteFood} at every ${favoriteMeal}.`)

//Exercise 2
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
const myWatchedSeriesToString = myWatchedSeries.toString();
const myWatchedSeriesLength = myWatchedSeries.length;
console.log(myWatchedSeriesLength)
console.log(`I watched ${myWatchedSeriesLength}: ${myWatchedSeriesToString}.`)
myWatchedSeries[2]="friends";
console.log(myWatchedSeries)
myWatchedSeries.push("The 48 Ways");
myWatchedSeries.unshift("The News");
console.log(myWatchedSeries);
myWatchedSeries.splice(1,1)
console.log(myWatchedSeries);
console.log(myWatchedSeries[1][2]);
console.log(myWatchedSeries);

const celsiusTemp = 18
const fahrenheit= (celsiusTemp/5)*9+32
console.log(`${celsiusTemp} degrees in celsius is ${fahrenheit} degrees.`);
////

let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: 55
// Actual:

a = 2;

console.log(a+b) //second expression
// Prediction:23
// Actual:


console.log(3 + 4 + '5');

typeof(1 != 2)