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
        li.innerHTML ='<span class="material-symbols-outlined">check_box_outline_blank</span> ' + inputBox.value;
        listContainer.appendChild(li);
    }
}

