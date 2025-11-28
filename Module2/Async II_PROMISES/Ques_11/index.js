// Step 1: Function that displays a greeting message
function displayMessage(name) {
  console.log("Hello, " + name + "!");
}

function getUserInput(callback) {
  setTimeout(() => {
    let username = "Alice"; 
    callback(username);     
  }, 1000);
}

getUserInput(displayMessage);
