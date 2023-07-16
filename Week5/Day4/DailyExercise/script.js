// // const promise1 = Promise.resolve(3);
// // const promise2 = 42;
// // const promise3 = new Promise((resolve, reject) => {
// //   setTimeout(resolve, 3000, 'foo');
// // });
// // // expected output: Array [3, 42, "foo"]

// // const promises = [promise1,promise2,promise3];

// // function getAllResolvedValues(promises){
// //     return Promise.all(promises)
// //     .then((resolvedValues) => {
// //         return resolvedValues;
// //     })
// //     .catch((error)=>{
// //         console.error(error);
// //         return [];
// //     });
// // }

// // getAllResolvedValues(promises)
// //     .then((resolvedArray)=>{
// //         console.log(resolvedArray);
// //     });

// // getAllResolvedValues(promises)




// // async function fetchData() {
// //   try {
// //     const promise1 = fetch("https://api.example.com/data1");
// //     const promise2 = new Promise((resolve) => {
// //       setTimeout(() => {
// //         resolve("Delayed Data");
// //       }, 2000);
// //     });

// //     const [result1, result2] = await Promise.all([promise1, promise2]);

// //     const data1 = await result1.json();
// //     console.log(data1);

// //     console.log(result2); // "Delayed Data"
// //   } catch (error) {
// //     console.error(error);
// //   }
// // }


// //Part Two:
// async function getSunriseData(cityLat, cityLng){
//     const apiUrl= `https://api.sunrise-sunset.org/json?lat=${cityLat}&lng=${cityLng}&date=today`;
//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     return data.results.sunrise;
// }

// const cityForm = document.querySelector('#cityForm');
// const sunriseResults = document.querySelector('#sunrise-results');

// cityForm.addEventListener('submit', async (event)=>{
//     event.preventDefault();

//     const city1Lat = document.querySelector('#city1Lat').value;
//     const city1Lng = document.querySelector('#city1Lng').value;
//     const city2Lat = document.querySelector('#city2Lat').value;
//     const city2Lng = document.querySelector('#city2Lng').value;

//     const promise1 = getSunriseHour(city1Lat, city1Lng);
//     const promise2 = getSunriseHour(city2Lat, city2Lng);

// })