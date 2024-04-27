async function doTask() {
  try {
    var task = prompt("Input task name:");
    var duration = prompt("Input duration:");

    if (isNaN(task) == false || isNaN(duration) == true) {
      throw new Error("Either task or duration invalid");
    }
    else {
      console.log(`Task ${task} assigned wait for completion`);
      const myPromise = new Promise((resolve) => {
        setTimeout(() => {
          console.log(`Task ${task} completed in ${duration} seconds`);
          resolve();
        }, duration * 1000);
      });
    };
    await myPromise;
  } catch (error) {
    console.error(error.message);
  }
}
doTask();