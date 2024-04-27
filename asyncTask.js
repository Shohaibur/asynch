const hasmeeting = false;

const mypromise = new Promise((resolve, reject) => {
  if (!hasmeeting) {
    const createMeeting = {
      name: "Technical",
      time: "10 Pm",
    };
    resolve(createMeeting);
  } else {
    reject(console.log("Meeting already scheduled"));
  }
});

mypromise
  .then((res) => {
    //resolved data
    console.log(res);
  })
  .catch((err) => {
    //rejected data
    console.log(err);
  });
