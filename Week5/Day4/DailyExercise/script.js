const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});
// expected output: Array [3, 42, "foo"]

const promises = [promise1,promise2,promise3];

function getAllResolvedValues(promises){
    return Promise.all(promises)
    .then((resolvedValues) => {
        return resolvedValues;
    })
    .catch((error)=>{
        console.error(error);
        return [];
    });
}

getAllResolvedValues(promises)
    .then((resolvedArray)=>{
        console.log(resolvedArray);
    });

getAllResolvedValues(promises)




// async function fetchData() {
//   try {
//     const promise1 = fetch("https://api.example.com/data1");
//     const promise2 = new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Delayed Data");
//       }, 2000);
//     });

//     const [result1, result2] = await Promise.all([promise1, promise2]);

//     const data1 = await result1.json();
//     console.log(data1);

//     console.log(result2); // "Delayed Data"
//   } catch (error) {
//     console.error(error);
//   }
// }



