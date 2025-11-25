const employ =  [

{ name: "Alice", tasksCompleted: 8, rating: 4.7 },

{ name: "Bob", tasksCompleted: 4, rating: 4.0 },

{ name: "Charlie", tasksCompleted: 6, rating: 3.5 },

{ name: "David", tasksCompleted: 10, rating: 4.9 },

{ name: "Eve", tasksCompleted: 7, rating: 2.8 }

]

function evaluation(employ){
    const filtered= employ.filter(emp=>emp.tasksCompleted>5);
    const perf=filtered.map(emp=>{
        let performance;
        if(emp.rating>4.5){
            performance="Excellent";
        }else if(emp.rating>=3 && emp.rating<=4.5){
            performance="good";
        }else{
            performance="needs improvement"
        }
        return{
            name: emp.name,
            performance: performance
        };
   });

   const priority={
    "Excellent":1,
    "good":2,
    "needs improvement":3
   };

   const sorted=perf.sort((a,b)=>{
    return priority[a.performance]-priority[b.performance]
   })
   return sorted;
}

console.log(evaluation(employ))