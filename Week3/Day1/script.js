// var theHeader= document.querySelector("h1");
// var theHeaderUpdated = theHeader.className="firstclass";
// var notebookDone = document.querySelector("li").classList.add("gotitdone");

// const text = document.querySelector(".title");
// const changeColor = document.querySelector(".changeColor");

// changeColor.addEventListener('click', function () {
//     text.classList.toggle("firstclass")
// })

//console.log(userList)

// for (person of userList){
//     person.addEventListener("click", function(){
//         this.style.color= "brown" 
//     })
// }

// console.log(listInput, value)


const userList = document.querySelectorAll(".name-list li");
const listInput = document.querySelector(".list-input")
const addListBtn = document.querySelector(".addListButton")


addListBtn.addEventListener('click', function () {
const newLi = document.createElement('LI');
const liContent = document.createTextNode('');
newLi.appendChild(liContent)
userList.appendChild(userList)
})