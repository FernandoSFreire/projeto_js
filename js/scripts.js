function addTask() {

    const taskTitle = document.querySelector("#curso_title").value;

    if(taskTitle) {
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        newTask.querySelector(".title").textContent = taskTitle;

        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        const list = document.querySelector("#list");

        list.appendChild(newTask);

        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function() {
            removeTask(this);
        });

        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function() {
            completeTask(this);
        });

        document.querySelector("#curso_title").value = "";

    }
}

function removeTask(task) {
    task.parentNode.remove(true);
}

function completeTask(task) {
    const taskToComplete = task.parentNode;

    taskToComplete.classList.toggle("done");
}


// Evento
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e) {

    e.preventDefault();

    addTask();

});