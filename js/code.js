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
taskList.addEventListener("click", deleteTask);
filterOption.addEventListener("click", filterTask);


