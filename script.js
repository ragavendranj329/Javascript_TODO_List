function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    const taskBox = document.createElement("div");
    taskBox.classList.add("taskBox");

    const taskItem = document.createElement("span");
    taskItem.textContent = taskInput.value;
    taskItem.addEventListener("click", toggleTask);

    const deleteButton = createButton("Delete", "delete", deleteTask);
    const editButton = createButton("Edit", "edit", editTask);

    taskBox.appendChild(taskItem);
    taskBox.appendChild(deleteButton);
    taskBox.appendChild(editButton);

    taskList.appendChild(taskBox);

    taskInput.value = "";
}

function createButton(text, className, onClick) {
    const button = document.createElement("button");
    button.textContent = text;
    button.classList.add(className);
    button.addEventListener("click", onClick);
    return button;
}

function toggleTask() {
    this.classList.toggle("completed");
}

function deleteTask() {
    this.parentElement.remove();
}

function editTask() {
    const newText = prompt("Edit the task:", this.parentElement.querySelector("span").textContent);
    if (newText !== null) {
        this.parentElement.querySelector("span").textContent = newText;
    }
}
