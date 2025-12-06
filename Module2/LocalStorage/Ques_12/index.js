console.log("Script loaded!");

const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const content = document.getElementById("content");

addBtn.addEventListener("click", function() {
    console.log("Add clicked"); // Debug
    const p = document.createElement("p");
    p.textContent = "This is a new paragraph.";
    content.appendChild(p);
});

removeBtn.addEventListener("click", function() {
    console.log("Remove clicked"); 
    const last = content.lastElementChild;
    if (last) {
        content.removeChild(last);
    }
});
