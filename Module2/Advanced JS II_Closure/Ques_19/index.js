let age = 20;  

function displayAge() {
  console.log("Age inside displayAge:", age);
}

function changeAge() {
  age = 25;  
  console.log("Age updated inside changeAge:", age);
}
displayAge();  
changeAge();   
displayAge();  