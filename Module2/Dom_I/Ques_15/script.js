
function addTask(){
    let tasktext =document.getElementById("taskInput").value.trim();

    if(tasktext===""){
        alert("Please enter a task!");
        return;
    }
    let ul=document.getElementById("taskList");
    let li=document.createElement("li");
    li.textContent=tasktext;

    let completebtn=document.createElement("button");
    completebtn.textContent="Complete";
    completebtn.style.padding="17px";
    completebtn.style.width="130px";
    completebtn.style.fontSize="17px"
    completebtn.addEventListener("click",function(){
        completebtn.textContent="Completed";
        li.classList.toggle("Completed")
    });

    let deletebtn=document.createElement("button");
    deletebtn.addEventListener("click",function() {
        ul.removeChild(li);
    });

    li.appendChild(completebtn);
    li.appendChild(deletebtn);

    ul.appendChild(li);

    document.getElementById("taskInput").value='';
}