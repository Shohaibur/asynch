var task_name = prompt("Please enter task");
var prompt_time = prompt("Please enter time (seconds)")

if (isNaN(task_name) == false || isNaN(prompt_time)==true) {
  console.log("Invalid Input");
} else {

console.log("Initiating task please wait (1 second) ");

  var task = (task_name ,call_result)=>{
    setTimeout(()=>{
      console.log(`${task_name} Task Assigned, wait for completion`),
    call_result()
    }, 1000 );  
  };
  var result =()=>{
    setTimeout(()=>{console.log(`Task - ${task_name} performing`)
    setTimeout(()=>{console.log(`${task_name} took ${prompt_time} seconds to complete`)
  },prompt_time*1000);
},1000);
  
  };
  task(task_name,result);
}

