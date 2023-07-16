// console.log("Starting ...")

// const data = {
//     title: "Article on Javascript",
//     body: "This is an article presenting the new features of Javascript", 
//     userId:1
// }

// const objBody = {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {"Content-type": "application/json; charset=UTF-8"}
// }

// const addArticle = () => {
//     console.log("Working ...")
//     fetch("https://jsonplaceholder.typicode.com/posts", objBody)
//         .then((response) => {
//             console.log(response);
//             if(response.ok === true){
//                 return response.json()
//             } else {
//                 throw new Error("Wrong post")
//             }
//         })
//         .then((obj) => {
//             console.log(obj);
//         })
//         .catch((error)  => {
//             console.log(error);
//         });
//     console.log("Work Done ...")
// }

// addArticle()

movePlayer(100, 'Left')
    .then(()=> movePlayer(400, 'Left'))
    .then(()=> movePlayer(10, 'Right'))
    .then(()=> movePlayer(10, 'Left'))

async function playerStart(){
    const firstMove = await movePlayer(100, 'Left');
    const secondMove = await movePlayer(100, 'Left');
    const thirdMove = await movePlayer(100, 'Left');
    const fourthMove = await movePlayer(100, 'Left');
}

