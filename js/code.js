import Timer from "./timer.js";
//10151963
new Timer
(
    document.querySelector(".timer")
);

const inputBox = document.querySelector('.input-box');
const taskList = document.querySelector('.task-ist');
const addBtn = document.querySelector('.add-btn');
const selectFilter = document.querySelector('.select-filter');

document.addEventListener("DOMContentLoaded", getLocalTasks);
addBtn.addEventListener("click", addTask);
taskList.addEventListener("click", deleteCheck);
selectFilter.addEventListener("click", filterTask);

function addTask(x)
{
    x.preventDefault();
    const taskDiv = document.createElement("div");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<span class="material-symbols-outlined">delete_forever</span>';
    deleteBtn.classList.add("delete-btn");
    taskDiv.appendChild(deleteBtn);

    taskDiv.classList.add("task");
    const newTask = document.createElement("li");
    newTask.innerHTML = inputBox.value;
    newTask.classList.add("task-item");
    taskDiv.appendChild(newTask);

    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = '<span class="material-symbols-outlined">check_box</span>';
    completeBtn.classList.add("complete-btn");
    taskDiv.appendChild(completeBtn);

    taskList.appendChild(taskDiv);
    inputBox.value = "";
}

 function deleteCheck(e)
 {
    const item = e.target;

    if(item.classList [0] === "delete-btn")
    {
        const task = item.parentElement;
        task.classList.add("slide");

        removeLocalTasks(task);
        task.addEventListener("transitioned", function() {
            task.remove();
        });
    }

    if(item.classList[0] === "complete-btn")
    {
        const task = item.parentElement;
        task.classList.toggle("completed");
    }
 }

 function filterTask(e)
 {
    const tasks = taskList.childNodes;
    tasks.forEach(function(t)
    {
        switch(e.target.value)
        {
            case "all":
                t.style.display = "flex";
                break;
            case "complete":
                if(t.classList.contains("complete"))
                {
                    t.style.display = "flex";
                }
                else
                {
                    t.style.display = "none";
                }
                break;
            case "incomplete":
                if(t.classList.contains("complete"))
                {
                    t.style.display = "flex";
                }
                else
                {
                    t.style.display = "none";
                }
                break;
        }
    });
 }

 function saveLocalTasks(task)
 {
    let tasks;
    if(localStorage.getItem("tasks") === null)
    {
        tasks = [];
    }
    else
    {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
 }

 function getLocalTasks()
 {
    let tasks;
    if(localStorage.getItem("tasks") === null)
    {
        tasks = [];
    }
    else
    {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.forEach(function(task)
    {
        const taskDiv = document.createElement("div");
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = '<span class="material-symbols-outlined">delete_forever</span>';
        deleteBtn.classList.add("delete-btn");
        taskDiv.appendChild(deleteBtn);

        taskDiv.classList.add("task");
        const newTask = document.createElement("li");
        newTask.innerHTML = inputBox.value;
        newTask.classList.add("task-item");
        taskDiv.appendChild(newTask);

        const completeBtn = document.createElement("button");
        completeBtn.innerHTML = '<span class="material-symbols-outlined">check_box</span>';
        completeBtn.classList.add("complete-btn");
        taskDiv.appendChild(completeBtn);

        taskList.appendChild(taskDiv);
    });
 }

 function removeLocalTasks(task)
 {
    let tasks;
    if(localStorage.getItem("tasks") === null)
    {
        tasks = [];
    }
    else
    {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    const taskIndex = task.children[0].innerText;
    tasks.splice(tasks.indexOf(taskIndex), 1);
    localStorage.setItem("tasks", JSON.stringify(tasks))
 }