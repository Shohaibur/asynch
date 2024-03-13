var task_name = prompt("Please enter task");
var take_time = prompt("Please enter time (seconds)")


take_time = take_time * 1000;

console.log("Initiating please wait 1 second");

var task = (task_name ,call_result)=>{
  setTimeout(()=>{
    console.log(`${task_name} Task Assigned, wait for completion`),
  call_result()
  }, 1000 );  
};

var result =()=>{
  setTimeout(()=>{console.log(`Task - ${task_name} performing`)
  setTimeout(()=>{console.log(`${task_name} took ${take_time/1000} seconds to complete`)
},take_time);
},1000);

};
task(task_name,result);