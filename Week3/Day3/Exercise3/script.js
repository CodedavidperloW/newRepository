const card = document.getElementById("box")
const dropZone = document.getElementById("target")

card.addEventListener('dragstart', function (event){

})

dropZone.addEventListener("dragover", function(event){
event.preventDefault()
})

dropZone.addEventListener("drop", function (event){
    dropZone.prepend(card)
})
