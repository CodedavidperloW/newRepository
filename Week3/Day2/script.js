

// function getFirstH1(){
//     return document.querySelector("h1")
// }

// let hOneHeading = getFirstH1()

// function getRandomNumber(){
//     return Math.floor(Math.random()*100)
// }
// let randomNumber = getRandomNumber()

// function randomizeH1Size(){
//     hOneHeading.style.fontSize = randomNumber+ "px"
// }

// hOneHeading.addEventListener("mouseover", randomizeH1Size)






// function removeThisPart() {
//     let article = document.querySelector("article")
//     article.lastElementChild.remove()
// }
// removeThisPart()


// function getSecondH2() {
//     return document.querySelector("article > h2")
// }

// let header2 = getSecondH2()

// header2.addEventListener("click", changeTheBackground)

// function changeTheBackground() {
//     header2.classList.add("red")
// }

// function getThirdH() {
//     return document.querySelector("article > h3")
// }

// let h3Heading = getThirdH()

// function changeH3Visibility() {
//     return h3Heading.classList.add("invisible")
// }

// h3Heading.addEventListener("click", changeH3Visibility)

// function getArticle() {
//     return document.querySelector("article")
// }
// addButton()

// function makeParagraphsBold() {
//     const paragraphs = document.querySelectorAll("p")
//     for (const paragraph of paragraphs){
//         paragraph.classList.add("bold")
//     }
// }


// function addButton() {
//     const button = document.createElement("button")
//     button.textContent = "Make everything bold!"
//     button.addEventListener("click", makeParagraphsBold)
//     const article = getArticle()
//     article.appendChild(button)
// }

// function getSecondParagraph(){ 
//     return document.querySelectorAll("p")[1]
// }
// const secondParagraph = getSecondParagraph()

// function fadeItOut(){
//     secondParagraph.classList.add("fadeout")
// }
// let fadingEffect = fadeItOut()

// secondParagraph.addEventListener("onmouseover", fadingEffect) 

// let button = document.querySelector("button")

// function getParagrpahs(){
//  return document.querySelectorAll('p')
// }

// let paragraphs = getParagrpahs()

// function makeItBold(){
//     return  paragraphs.classList.add(".paragraphs-bold")
// }

// button.addEventListener("click", makeItBold)

//Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

// h2.addEventListener("click", changeBackground)

// function changeBackground(){
//     document.h2.style.background = red
// }

//Exercise 2 

const form = document.querySelector("form")

let theFirstName = document.querySelector("label")
let addTheClass = addClassToFirstName()
function addClassToFirstName(){
    theFirstName.classList.add("bold")
}
theFirstName.addEventListener("onmouseover", addTheClass)


const firstLabel = document.querySelector("label")

function logFormInputs() {
    console.log("logging form inputs")
}


const submitButton = document.getElementById("submit");
function submitTheValues(e) {
    e.preventDefault();
    const firstName = document.querySelector("[name=fname]").value
    const lastName = document.querySelector("[name=lname]").value
    const theRealUl = document.querySelector(".usersAnswer");
    const li = document.createElement("li")
    const li2 = document.createElement("li")
    console.log(firstName, lastName);
    
    if(firstName===""||lastName==="") return alert("Please fill in all fields!");
        theRealUl.innerHTML=""
        li.innerText= firstName;
        li2.innerText = lastName;
        theRealUl.append(li, li2)
    }


form.addEventListener("submit", submitTheValues);



