var task = prompt("Input task name:");
var duration = prompt("Input duration:");

var asynchTask = new Promise((resolve,reject)=>{
  if (isNaN(task) == false || isNaN(duration) == true) {
    console.log ("Invalid input failed to perform task");
    reject();
  } 
  else {
    console.log("Initiating task please wait (1 second) ");
    
      var dotask = (task ,call_result)=>{
        setTimeout(()=>{
          console.log(`${task} Task Assigned, wait for completion`),
        call_result()
        }, 1000 );  
      };
      var result =()=>{
        setTimeout(()=>{console.log(`Task - ${task} performing`)
        setTimeout(()=>{console.log(`${task} took ${duration} seconds to complete`)
      },duration*1000);
    },1000);
    
      };
      dotask(task,result);
    }
  }
)

asynchTask
  .then((res)=>{
    console.log(res);
  })
  .catch((err)=>{
    console.log(err);
  })
  .finally(() => {
    console.log("Task scheduling program ended."); // Finalization logic
  });