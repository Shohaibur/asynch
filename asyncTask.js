var task_name = prompt("Please enter task");
var prompt_time = prompt("Please enter time (seconds)")




if (task_name !='NaN' || prompt_time == 'NaN ') {
  console.log("Invalid Input");
} else {

  prompt_time = prompt_time * 1000;

console.log("Initiating please wait 1 second");

  var task = (task_name ,call_result)=>{
    setTimeout(()=>{
      console.log(`${task_name} Task Assigned, wait for completion`),
    call_result()
    }, 1000 );  
  };
  
  var result =()=>{
    setTimeout(()=>{console.log(`Task - ${task_name} performing`)
    setTimeout(()=>{console.log(`${task_name} took ${prompt_time/1000} seconds to complete`)
  },prompt_time);
  },1000);
  
  };
  task(task_name,result);
}

