let redBox = document.getElementById("animate")
let yellowBox = document.getElementById("container")
var button = document.getElementsByTagName("button")[0]
let stopButton = document.getElementById("stop")

function myMove(){
    redBox.classList.add("move")
}

stopButton.addEventListener("click",stopIt)

function stopIt(){
    redBox.classList.remove("move")
}



