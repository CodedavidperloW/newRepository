// // addTask()
// // function addTask(){
// //     const button = document.getElementsByTagName("input")[1];
// //     console.log(button)
// // }
// //console.log(data.value)
// // console.log(listOfTasks)
// // listOfTasks.append(tasks)

const tasks = []
const addButton = document.getElementById("button")
const inputField = document.getElementById("task-input");
const form = document.getElementById("form")
const listOftasks= document.getElementById("list-tasks");
const thingsDone = document.getElementById("things-done")

form.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(form);
    const taskText = formData.get("task");
    if(taskText ==="") return;
    if (tasks.length >=10){
        alert("You've reached the limit! Finish some of your tasks!")
        return
    }    
    const task = generateTask(taskText)
    tasks.push(task)
    renderTasks(tasks)
    form.reset();
}

function generateTask(taskText){
return taskText
}


function renderTasks(tasks){
    ul.innerHTML='';

    for(const task of tasks){
        console.log("The current task is: ", task);
        const li= generateLi(task)
        ul.append(li)
    }
}

function generateLi(task){
    const li = document.createElement("li");
    const xMark = document.createElement("i");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    const span = document.createElement("label")
    span.innerText = task
    
    checkbox.addEventListener("change", function(){
        if(checkbox.checked){
           handleCheckboxChange(checkbox);
        } 
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    return li
}

addButton.addEventListener("click", function (){
    const task = inputField.value;
    if (task.trim() !== ""){
        const li = generateLi(task);
        listOftasks.appendChild(li);
        inputField.value = "";
    }
});


function handleCheckboxChange(checkbox){
    const taskItem = checkbox.parentNode;
    const taskLabel =taskItem.querySelector("label");

    const completedItem = document.createElement("li")
    completedItem.innerText = taskLabel.innerText;
    thingsDone.appendChild(completedItem)
    
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    completedItem.appendChild(balloon);
    completedItem.classList.add("animate-balloon");

    taskItem.remove();
    
    setTimeout(function (){
        completedItem.removeChild(balloon);
        completedItem.classList.remove("animate-balloon");
    }, 2000);
}
