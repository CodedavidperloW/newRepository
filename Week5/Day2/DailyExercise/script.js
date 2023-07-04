let xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");

function displayGif(gif){
    console.log(gif);
    let gifContainer = document.createElement("div");
    gifContainer.classList.add("gif-container");
    let gifElement = document.createElement("img");
    gifElement.src = gif.fixed_height_downsampled_url;
    gifContainer.appendChild(gifElement);
    
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "DELETE";
    deleteButton.addEventListener("click", function(){
        gifContainer.remove();
    });
    gifContainer.appendChild(deleteButton)
    
    document.body.appendChild(gifContainer);
}

const deleteAllButton = document.getElementById('deleteAllButton');
deleteAllButton.addEventListener('click', deleteAllGifs);
function deleteAllGifs(){
    const allGifs = document.querySelectorAll('.gif-container');
    allGifs.forEach(gif => gif.remove());
}


xhr.addEventListener("load", function () {
    if (xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        let gif = response.data;
        displayGif(gif);
    } else {
        console.log("Error:", xhr.status);
    }
});
xhr.addEventListener("error", function () {
    console.log("Request Failed");
})

xhr.send();


const resultArray = [];

function fetchGif(category){
    let apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
    let url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${category}`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let gif= data;
        resultArray.push(gif);
        displayGif(gif);
        console.log(data);
    })
    .catch(error => {
        console.log ("Error:", error)
    });
}

document.getElementById('gifForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let category = document.getElementById('categoryInput').value
    fetchGif(category)
});
