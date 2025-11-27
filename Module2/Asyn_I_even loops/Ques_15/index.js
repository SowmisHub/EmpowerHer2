let seconds = parseInt(prompt("Enter the number of seconds for the countdown:"));

let countdownInterval = setInterval(() => {
  console.log(`Remaining time: ${seconds} seconds`);

  if (seconds === 0) {
    console.log("Countdown Complete!");
    clearInterval(countdownInterval);   } else {
    seconds--; 
  }
}, 1000);

let keyPressTimeout = setTimeout(() => {
  document.addEventListener('keydown', (event) => {
    if (event.key === 's') {
      clearInterval(countdownInterval); 
      console.log("Countdown stopped by user.");
    }
  });
}, 500); 
