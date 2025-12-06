//------------------------------------------------------------
// On page load, check if notes exist in localStorage
// If yes, display them in the text area.
//------------------------------------------------------------
window.addEventListener("DOMContentLoaded", function () {
    const savedNotes = localStorage.getItem("userNotes");

    if (savedNotes) {
        document.getElementById("notesArea").value = savedNotes;
    }
});

//------------------------------------------------------------
// Save Notes Button
//------------------------------------------------------------
document.getElementById("saveBtn").addEventListener("click", function () {
    const notes = document.getElementById("notesArea").value.trim();

    // Validation: Do NOT save empty notes
    if (notes === "") {
        alert("Please enter some notes before saving.");
        return;
    }

    localStorage.setItem("userNotes", notes);
    alert("Notes saved successfully!");
});

//------------------------------------------------------------
// Load Notes Button
//------------------------------------------------------------
document.getElementById("loadBtn").addEventListener("click", function () {
    const savedNotes = localStorage.getItem("userNotes");

    if (savedNotes) {
        document.getElementById("notesArea").value = savedNotes;
        alert("Notes loaded!");
    } else {
        alert("No notes found!");
    }
});

//------------------------------------------------------------
// Clear Notes Button
//------------------------------------------------------------
document.getElementById("clearBtn").addEventListener("click", function () {
    localStorage.removeItem("userNotes");
    document.getElementById("notesArea").value = "";
    alert("Notes cleared!");
});
