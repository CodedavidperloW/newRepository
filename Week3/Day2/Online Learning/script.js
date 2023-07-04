var text = document.getElementById("userinput");
var button = document.getElementById("enter");
var list = document.getElementById("list");

button.addEventListener("click", function(){
if(text.value === "") return;  //create a code that will prevent blank answers
var li = document.createElement("li")// create an li element
li.appendChild(document.createTextNode(text.value))// create a text node and append it to your li (above)
list.appendChild(li)// append the above "value to your ul list"  
text.value=""// create code that will return the submission part blank
})