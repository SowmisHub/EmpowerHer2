document.addEventListener("DOMContentLoaded", () => {
    loadTasks();
});

let tasks = [];

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const searchInput = document.getElementById("searchInput");

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks safely
function loadTasks() {
    const saved = localStorage.getItem("tasks");

    try {
        const parsed = JSON.parse(saved);
        tasks = Array.isArray(parsed) ? parsed : [];
    } catch {
        tasks = [];
    }

    displayTasks(tasks);
}

// Add task
addBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();

    if (text === "") {
        alert("Please enter a task.");
        return;
    }

    const newTask = {
        id: Date.now(),
        text,
        completed: false
    };

    tasks.push(newTask);
    saveTasks();
    displayTasks(tasks);

    taskInput.value = "";
});

// Display tasks beautifully
function displayTasks(list) {
    taskList.innerHTML = "";

    list.forEach(task => {
        const li = document.createElement("li");
        li.classList.add("task-item");

        if (task.completed) {
            li.classList.add("completed");
        }

        // Task text
        const textSpan = document.createElement("span");
        textSpan.textContent = task.text;
        textSpan.classList.add("task-text");

        // Complete button
        const completeBtn = document.createElement("button");
        completeBtn.textContent = "✔";
        completeBtn.classList.add("complete-btn");
        completeBtn.addEventListener("click", () => {
            task.completed = !task.completed;
            saveTasks();
            displayTasks(tasks);
        });

        // Delete button
        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.classList.add("delete-btn");
        delBtn.addEventListener("click", () => {
            tasks = tasks.filter(t => t.id !== task.id);
            saveTasks();
            displayTasks(tasks);
        });

        // Button container (keeps buttons together)
        const btnBox = document.createElement("div");
        btnBox.classList.add("btn-box");
        btnBox.appendChild(completeBtn);
        btnBox.appendChild(delBtn);

        li.appendChild(textSpan);
        li.appendChild(btnBox);

        taskList.appendChild(li);
    });
}

// Search tasks
searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase();
    const filtered = tasks.filter(task =>
        task.text.toLowerCase().includes(keyword)
    );
    displayTasks(filtered);
});
