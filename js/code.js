import Timer from "./timer.js";

new Timer
(
    document.querySelector(".timer")
);

const inputBox = document.querySelector('.input-box');
const listContainer = document.querySelector('.list-container');
const addBtn = document.querySelector('.add-btn');

addBtn.addEventListener("click", addTask);

function addTask()
{
    if(inputBox.value === '')
    {
        alert("You must write something");
    }
    else
    {   
        
        
        let li = document.createElement("li");
        let taskText = document.createElement("span");
        taskText.classList.add("taskText");
        taskText.innerText = inputBox.value;
        let uncheckedBox = document.createElement("span");
        uncheckedBox.innerHTML = '<span class="material-symbols-outlined darkGreen emptyBox">check_box_outline_blank</span>';
        let span = document.createElement("span");
        span.innerHTML = '<span class="material-symbols-outlined darkGreen delete-btn">delete_forever</span>';
        li.appendChild(uncheckedBox);
        li.appendChild(taskText);
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e)
{
    let checkedBox = document.createElement("span");
    checkedBox.innerHTML = '<span class="material-symbols-outlined inactive">check_box</span>';
    if(e.target.classList.contains("taskText") || e.target.classList.contains("emptybox"))
    {
        uncheckedBox.classList.add("inactive");
        checkedBox.classList.toggle("inactive");
        li.appendChild(checkedBox);
        taskText.classList.toggle("checked");
        saveData();
    }
    else if(e.target.classList.contains("delete-btn"))
    {
        li.parentElement.remove();
        console.log("pup");
        saveData();
    }
}, false)

function saveData()
{
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTasks()
{
    listContainer.innerHTML = localStorage.getItem("data");
}
showTasks();