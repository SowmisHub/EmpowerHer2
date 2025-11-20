// answrer for a)

const isEven = n => n % 2 === 0;
console.log(isEven(4));

// answer for b)

const marks=36;
const result = marks >= 35 ? "Pass" : "Fail";
console.log(result);

// answer for c)

const greet = (name) => {
  console.log(`Hello, ${name ? name : "Guest"}`);
};
greet("Sowmika");
greet();
