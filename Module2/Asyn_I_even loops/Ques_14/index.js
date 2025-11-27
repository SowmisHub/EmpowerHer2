console.log("Begin");

setTimeout(() => {
  console.log("Timeout Task");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise Task");
});

console.log("End");

// EXPLNATION :
// Synchronous code (console.log("Begin") and console.log("End")) runs first, printing "Begin" and "End".
// Microtasks (like Promise.resolve().then()) execute after the synchronous code but before macrotasks (like setTimeout), 
// so "Promise Task" prints next.
// Macrotasks (like setTimeout) execute last, so "Timeout Task" is printed after the promise task.