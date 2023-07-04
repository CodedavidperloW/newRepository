// let xhr = new XMLHttpRequest()
// xhr.open('GET', 'https://api.chucknorris.io/jokes/random?category=food')
// xhr.responseType='json'
// xhr.send();
// xhr.onload = function(){
//     if (xhr.status !=200){
//         alert (`Error ${xhr.status}: ${xhr.statusText}`);
//     }else {
//         console.log(`Joke: ${xhr.response.value}`)
//     }
// };

// xhr.onerror= function(){
//     alert("Request Failed");
// };


// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://zivuch.github.io/data.json');
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
// xhr.responseType = 'json';
// xhr.send();

// xhr.onload = function(){
//     if (xhr.status != 200){

//     } else {
//         console.log(xhr.response);
//     }
// };

// xhr.onprogress = function(event) {
//     if (event.lengthComputable) {
//       // console.log(`Received ${event.loaded} of ${event.total} bytes`);
//     } else {
//       // console.log(`Received ${event.loaded} bytes`); // no Content-Length
//     }
//   };

//   xhr.onerror = function() {
//     console.log("Request failed");
//   };


// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://zivuch.github.io/emails.xml');
// xhr.withCredentials = false;
// xhr.responseType = 'document';
// xhr.send()

// xhr.onload = function(){
//     if(xhr.status != 200){
//       console.log(`Error: ${xhr.status}: ${xhr.statusText}`);
//     }
//     else{
//       console.log(xhr.response);
//       loadXml(xhr.response);
//     }
//   }

//   xhr.onprogress = function(event) {
//     if (event.lengthComputable) {
//       console.log(`Received ${event.loaded} of ${event.total} bytes`);
//     } else {
//       console.log(`Received ${event.loaded} bytes`); // no Content-Length
//     }
//   };

//   xhr.onerror = function() {
//     console.log('Error something wrong###');
//   };
//   function loadXml(xmlDoc) {
//     var cd = xmlDoc.getElementsByTagName("email");
//     for (let i = 0; i <cd.length; i++) {
//         console.log(cd[i].getElementsByTagName("to")[0].childNodes[0].nodeValue);
//         console.log(cd[i].getElementsByTagName("from")[0].childNodes[0].nodeValue);
//     }
// }

// let formData = new FormData(document.forms.articleBlog);
// let formDataJson = JSON.stringify(Object.fromEntries(formData))
// console.log(formDataJson); 

// let xhr = new XMLHttpRequest();
// xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true)
// xhr.setRequestHeader('Content-Type', 'application/json');
// xhr.send(formDataJson);
// xhr.onload = () => console.log(JSON.parse(xhr.response))

let sunGifs=[]
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2");
xhr.send();
xhr.onload = function () {
    if (xhr.status != 200) { // analyze HTTP status of the response
        alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
    } else { // show the result
        const responseJson = JSON.parse(xhr.response);
        responseJson.data.forEach(gif => {
            if(gif.title.toLowerCase().includes("sun")){
                sunGifs.push(gif)
            }
            console.log(sunGifs)
        });
    }
};



