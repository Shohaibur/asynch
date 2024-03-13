var tasks = [
  {task: "Homework", Time : "2000"},
  {task: "Coding", Time : "3000"},
  {task: "Cooking", Time : "4000"},
  {task: "Workout", Time : "5000"},
  {task: "Reading books" , Time : "2000"}
]

var task_name = prompt("Please enter the option number for the task:\n0. Homework (Time: 2 sec)\n1. Coding (Time: 3000)\n2. Cooking (Time: 4000)\n3. Workout (Time: 5000)\n4. Reading books (Time: 2000)");



var task = (task_name,call_result)=>{
  setTimeout(()=>{
    console.log(`${tasks[task_name].task} Task Assigned, wait for completion`),
  call_result()
  }, 1000 );  
};



var result =()=>{
  setTimeout(()=>{console.log(`Task - ${tasks[task_name].task} selected `)
  setTimeout(()=>{console.log(`${tasks[task_name].task} took ${tasks[task_name].Time}  milliseconds to complete`)
},tasks[task_name].Time);
},0);

};
task(task_name,result);