// answer for a)

const username="Sowmika";
const course="JavaScript";
console.log(`Hello ${username}, welcome to the course ${course}`);

//answer for b)

const name ="sam";
const age=21;
const student={
    name,
    age,
    greet(){
        console.log("Hello")
    }

};
console.log(student);
student.greet();

// answer for c)

const getFullName=({firstName,lastName})=>`${firstName} ${lastName}`;
console.log(getFullName({firstName:"vemula",lastName:"sowmika"}));
