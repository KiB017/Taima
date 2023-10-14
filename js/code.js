import Timer from "./timer.js";
//10151963
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
        uncheckedBox.innerHTML = '<span class="material-symbols-outlined darkGreen unchecked-box">check_box_outline_blank</span>';
        let span = document.createElement("span");
        span.innerHTML = '<span class="material-symbols-outlined darkGreen delete-btn">delete_forever</span>';
        li.appendChild(uncheckedBox);
        li.appendChild(taskText);
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e){
    if(e.target.classList.contains("taskText") || e.target.classList.contains("unchecked-box"))
    {
        let checkedBox = document.createElement("span");
        checkedBox.innerHTML = '<span class="material-symbols-outlined checked-box">check_box</span>';
        let uncheckedBox = document.querySelector('unchecked-box');
        e.target.classList.contains("unchecked-box").replaceWith(checkedBox);
        e.target.classList.toggle("checked");
        console.log("checked");
        saveData();
    }
    else if(e.target.classList.contains("delete-btn"))
    {
        let li = e.target.parentElement;
        li.remove();
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