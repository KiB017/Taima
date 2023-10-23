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

addBtn.addEventListener("click", addTask);

function addTask(x)
{
    x.preventDefault();
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    const newTask = document.createElement("li");
    newTask.classList.add("task_text");
    newTask.innerHTML = inputBox.value;

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


function deleteCheck(e) {
    const item = e.target;

    if(item.classList[0] === "delete_btn") {
        const task = item.parentElement;
        task.classList.add("slide");

        removeLocalTodos(todo);
        task.addEventListener("transitionend", function() {
            task.remove();
        });
    }

    if(item.classList[0] === "checkbox_btn") {
        const task = item.parentElement;
        task.classList.toggle("completed");
    }
}