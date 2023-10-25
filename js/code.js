import Timer from "./timer.js";
//10151963
new Timer
(
    document.querySelector(".timer")
);

const inputBox = document.querySelector(".input-box");
const taskList = document.querySelector(".task-list");
const addBtn = document.querySelector('.add-btn');
const selectFilter = document.querySelector('.select-filter');

document.addEventListener("DOMContentLoaded", getLocalTasks);
addBtn.addEventListener("click", addTask);
taskList.addEventListener("click", deleteCheck);
selectFilter.addEventListener("change", filterOptions)

function addTask(x)
{
    x.preventDefault();
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    const newTask = document.createElement("li");
    newTask.classList.add("task_text");
    newTask.innerHTML = inputBox.value;
    saveLocalTasks(inputBox.value)

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<span class="material-symbols-outlined">delete_forever</span>';
    deleteBtn.classList.add("delete_btn");

    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = '<span class="material-symbols-outlined">check_box</span>';
    completeBtn.classList.add("checkbox_btn");

    taskDiv.appendChild(completeBtn);
    taskDiv.appendChild(newTask);
    taskDiv.appendChild(deleteBtn);

    taskList.appendChild(taskDiv);
    inputBox.value = "";
}


function deleteCheck(e)
{
    const item = e.target;

    if(item.classList[0] === "delete_btn")
    {
        const task = item.parentElement;
        task.classList.add("slide");
        removeLocalTasks(task);
        task.addEventListener("transitioned", function()
        {
            task.remove();
        })
        
    }

    if(item.classList[0] === "checkbox_btn")
    {
        const task = item.parentElement;
        task.classList.toggle("completed");
    }
}

function filterOptions(x)
{
    const tasks = taskList.childNodes;
    tasks.forEach(function(task)
    {
        switch(x.target.value)
        {
            case "all":
                task.style.display = "flex";
                break;
            case "completed":
                if(task.classList.contains("completed"))
                {
                    task.style.display = "flex";
                }
                else
                {
                    task.style.display = "none"; 
                }
                break;
            case "incompleted":
                if(!task.classList.contains("completed"))
                {
                    task.style.display = "flex";
                }
                else
                {
                    task.style.display = "none"; 
                }
                break;
        }
    });
}

function saveLocalTasks(t)
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
    tasks.push(t);
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
        taskDiv.classList.add("task");

        const newTask = document.createElement("li");
        newTask.classList.add("task_text");
        newTask.innerText = task;

        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = '<span class="material-symbols-outlined">delete_forever</span>';
        deleteBtn.classList.add("delete_btn");

        const completeBtn = document.createElement("button");
        completeBtn.innerHTML = '<span class="material-symbols-outlined">check_box</span>';
        completeBtn.classList.add("checkbox_btn");

        taskDiv.appendChild(completeBtn);
        taskDiv.appendChild(newTask);
        taskDiv.appendChild(deleteBtn);

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
    localStorage.setItem("tasks", JSON.stringify(tasks));
}