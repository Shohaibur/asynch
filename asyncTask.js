var tasks = [
  {task: "Homework", Time : "2000"},
  {task: "Coding", Time : "3000"},
  {task: "Cooking", Time : "4000"},
  {task: "Workout", Time : "5000"},
  {task: "Reading books" , Time : "2000"}
]

var prompt_task = prompt("Please enter the option number for the task:\n0. Homework (Time: 2 sec)\n1. Coding (Time: 3000)\n2. Cooking (Time: 4000)\n3. Workout (Time: 5000)\n4. Reading books (Time: 2000)");


var task = (prompt_task,call_result)=>{
  setTimeout(()=>{
    console.log(`${tasks[prompt_task].task} Task Assigned, wait for completion`),
  call_result()
  }, 1000 );  
};


var result =()=>{
  setTimeout(()=>{console.log(`Task - ${tasks[prompt_task].task} selected `)
  setTimeout(()=>{console.log(`${tasks[prompt_task].task} took ${tasks[prompt_task].Time}  milliseconds to complete`)
},tasks[prompt_task].Time);
},0);

};
task(prompt_task,result);