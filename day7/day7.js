// polyfill

if (!Array.prototype.includes) {
  Array.prototype.includes = (searchElement) => {
    for (let i = 0; i < this.length; i++) {
      if (this[i] == key) {
        return this[i];
      }
    }
    return false;
  };
}
// base class username
function User(name) {
  this.name = name;
}

// child class visitor count
function Visitor(name, visit) {
  User.call(this, name);
  this.visitCount = visit;
}

Visitor.prototype = Object.create(User.prototype);

Visitor.prototype.constructor = Visitor;

Visitor.prototype.getOrSaveName = function () {
  let savedName = localStorage.getItem("username");

  if (!savedName || savedName.trim() === "" || savedName === "null") {
    while (!savedName || savedName.trim() === "" || savedName === "null") {
      savedName = prompt("enter your username:");
    }

    if (savedName) {
      localStorage.setItem("username", savedName);
    } else {
      console.log("hey enter a name");

      console.log("it came to else");
    }
  }

  return savedName;
};

Visitor.prototype.getVisitCookie = function () {
  let cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    let [key, value] = cookies[i].trim().split("=");

    if (key === "visit") {
      return parseInt(value);
    }
  }
  return 0;
};

Visitor.prototype.updateVisitCookie = function (currentCount) {
  let newCount = currentCount + 1;

  document.cookie = `visit=${newCount}; max-age=86400; path=/`;

  return newCount;
};

Visitor.prototype.getSuffix = function (num) {
  if (num % 10 === 1 && num % 100 !== 11) return "st";
  if (num % 10 === 2 && num % 100 !== 12) return "nd";
  if (num % 10 === 3 && num % 100 !== 13) return "rd";
  return "th";
};

Visitor.prototype.resetData = function () {
  localStorage.removeItem("username");

  document.cookie = `visit=0;max-age=0;path=/`;

  location.reload();
};

let displayDiv = document.getElementById("displayDiv");

let resetBtn = document.getElementById("resetData");

let tracker = new Visitor();

let activeName = tracker.getOrSaveName();
let visitHistory = tracker.getVisitCookie();

let updatedVisit = tracker.updateVisitCookie(visitHistory);

console.log(activeName, visitHistory, updatedVisit);

let currentuser = new Visitor(activeName, updatedVisit);

if (currentuser.name) {
  let numSuffix = currentuser.getSuffix(updatedVisit);
  displayDiv.innerHTML = `hi ${currentuser.name} this is your ${currentuser.visitCount} ${numSuffix} visit`;
}

resetBtn.addEventListener("click", () => tracker.resetData());
