//Exercise 1

function alertHello() {
    alert("Hello World!")
}

setTimeout(alertHello, 2000)

const intervalParagraph = setInterval(addAParagraph, 2000)


let divForUse = document.getElementById("container")
let newP = document.createElement("p")

function newIt() {
    newP.appendChild(document.createTextNode("Hello David"))
    divForUse.appendChild(newP)
    newP.style.fontSize = "26px"
}

setTimeout(newIt, 5000)

let clearIt = document.getElementById("clear")
clearIt.addEventListener("click", stopIt)

function stopIt() {
    clearInterval(intervalParagraph);
}

function addAParagraph() {
    let newP2 = document.createElement("p")
    newP2.appendChild(document.createTextNode("Hello World!"))
    divForUse.children.length < 5 ? divForUse.appendChild(newP2) : stopIt()
    // if (divForUse.children.length < 5){
    //     divForUse.appendChild(newP2)
    // } else {
    //     stopIt()
    // }
}

