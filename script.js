const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === '') {
        alert("Enter your task!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}


/*
listContainer.addEventListener("click", function(e) { ... })
This line attaches a click event to listContainer.
Whenever anything inside listContainer is clicked, the function runs.
e is the event object, which contains info about what was clicked.

e.target
e.target is the actual element that was clicked (for example: an <li> or <span> inside the list).

What is e.target.classList.toggle("checked")?
🔹 e.target
This is the element that was clicked.
🔹 classList
This gives access to all the CSS classes applied to that element.
🔹 .toggle("checked")
This means:
If the element already has the class checked, it will remove it.
If it doesn’t have the class checked, it will add it.

parentElement
This is the HTML element that wraps around the clicked element. i.e <li>
*/


listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }

    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false); 

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
} 
showTask();
