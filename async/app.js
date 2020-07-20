const button = document.querySelector("button");
const output = document.querySelector("p");

const setTimer = duration => {
  const promise = new Promise((resolve, reject) => {
    // This will be executed right away
    // First argument is resolve, second argument is reject
    setTimeout(() => {
      reject("No");
      resolve("Yes"); // This like returns
    }, duration);
  });
  return promise;
};

const getPosition = opts => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      successReturnData => {
        resolve(successReturnData);
      },
      failedReturnData => {
        reject(failedReturnData);
      },
      opts
    );
  });
  return promise;
};

function trackUserHandler() {
  getPosition().then(successReturnData =>{
    console.log("here");
    console.log(successReturnData);
  });
  navigator.geolocation.getCurrentPosition(
    posData => {
      setTimer(2000).then(
        data => {
          console.log("Promise Fullfilled");
          console.log(data);
        },
        data => {
          console.log("Promise Rejected!");
          console.log(data);
        }
      );
    },
    error => {
      console.log(error);
    }
  );
  setTimeout(() => {
    console.log("Timer done!");
  }, 0);
  console.log("Getting position...");
}

button.addEventListener("click", trackUserHandler);

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);

// The Promise object is used for deferred and asynchronous computations. A Promise represents an operation that hasn't completed yet, but is expected in the future.
