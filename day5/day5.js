let logtype = "Info";

let info = createLogger(logtype);

info("testing log");

let throttleTest = throttle(info, 10);

let userIp = document.getElementById("userInput");

let debounceSearch = debounce(runSearch, 1000);

userIp.addEventListener("input", (event) => {
  let currentText = event.target.value.trim();
  if (currentText.length > 0) {
    throttleTest(event.target.value);
    debounceSearch(event.target.value);
  } else {
    console.log("nothing to search!!! type something");
  }
});

function debounce(orgFunc, delay) {
  let timerId = 0;

  return function (inputSearch) {
    clearTimeout(timerId);

    timerId = setTimeout((event) => {
      // console.log("hi iam here in debounce settimeout");
      let changeLogType = createLogger("debounce");
      changeLogType("debounce search triggered");

      orgFunc(inputSearch)
        .then((results) => {
          let resultOp = results.map((value) => {
            return value.toUpperCase();
          });
          return resultOp;
        })
        .then((UpperCaseArray) => {
          return "results:" + UpperCaseArray.join(", ");
        })
        .then((finalOp) => {
          console.log(finalOp);
        });
    }, delay);
  };
}

function runSearch(inputValue) {
  return new Promise((resolve, reject) => {
    // console.log("hey iam searching");
    if (inputValue) {
      let resultsDb = [inputValue, "result1", "result2"];
      setTimeout(() => {
        resolve(resultsDb);
      }, 3000);
    } else {
      reject(inputValue);
    }
  });
}

function throttle(orgFunc, delay) {
  let lastExecutedTime = 0;
  return function (currentInputValue) {
    let currentTime = Date.now();
    if (currentTime - lastExecutedTime >= delay) {
      orgFunc(currentInputValue);

      lastExecutedTime = currentTime;
    } else {
      // console.log("wait boy");
    }
  };
}

function createLogger(logtype) {
  return function (message) {
    if (logtype === "Info") {
      console.log("[" + logtype + "]" + "-" + message);
    } else {
      console.log("[" + logtype + "]" + "-" + message);
    }
  };
}
