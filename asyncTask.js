var tasks = [
  {task: "Homework"},
  {task: "Coding"},
  {task: "Cooking"},
  {task: "Workout"},
  {task: "Reading books"}
]

var task_name = prompt("Please enter the option number for the task:\n1. Homework \n2. Coding \n3. Cooking \n4. Workout \n5. Reading books");
var take_time = prompt("Please enter time (seconds)")

task_name = task_name-1;
take_time = take_time * 1000;

var task = (task_name ,call_result)=>{
  setTimeout(()=>{
    console.log(`${tasks[task_name].task} Task Assigned, wait for completion`),
  call_result()
  }, 1000 );  
};



var result =()=>{
  setTimeout(()=>{console.log(`Task - ${tasks[task_name].task} performing `)
  setTimeout(()=>{console.log(`${tasks[task_name].task} took ${take_time/1000} seconds to complete`)
},take_time);
},1000);

};
task(task_name,result);