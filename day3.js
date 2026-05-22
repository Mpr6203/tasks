// Day 3 Task
// 🛠 Task: User Profile Manager (Web-based Interactive Task) -
// This task will cover the following concepts:

// • DOM & its Methods: Manipulating HTML elements (getElementById,
// querySelector, innerText, setAttribute)

// • BOM & its Methods: Interacting with browser properties (window.alert,
// window.location, setTimeout)

// • Array Methods: map, filter, forEach, push

// • String Methods: toUpperCase, toLowerCase, trim, includes

// • Object Methods: keys, values, entries, hasOwnProperty

// 🎯 Sample Interaction & Output:
// User clicks "Add New User" button
// (Prompt appears) Enter user name: John
// (Alert appears) User added successfully!
// (User list updates)
// 1. JOHN (john@example.com)
// User clicks "Show Users" button
// (User list in console)
// Users: [ { id: 1, name: 'JOHN', email: 'john@example.com' } ]
// User clicks "Clear Users" button
// (Alert appears) All users cleared!
// (User list is now empty)



// 1. INITIALIZE DATA
let userList = [];
let counter = 1;

// 2. DOM SELECTION
let addBtn = document.getElementById("add-btn");
let showBtn = document.getElementById("show-btn");
let clearBtn = document.getElementById("clear-btn");
let listContainer = document.getElementById("list");
let deleteBtn = document.getElementById("delete-btn");

// 3.  USER FUNCTIONALITies
addBtn.addEventListener("click", addUser);
showBtn.addEventListener("click", showUsers);
clearBtn.addEventListener("click", clearUsers);
deleteBtn.addEventListener("click", deleteUser);

function addUser() {
  let rawInput = window.prompt("enter your username:");
  if (!rawInput) return;

  let cleanInput = rawInput.trim();
  let userName = cleanInput.toUpperCase();
  let emailName = cleanInput.toLowerCase();

  if (userName) {
    let userEmail = emailName + "@example.com";
    let userDetails = { id: counter, name: userName, email: userEmail };
    userList.push(userDetails);
    window.alert("User added successfully");
    counter += 1;
    render()
  }
}

// 4. RENDER FUNCTIONALITY
// function render() {
//   listContainer.innerHTML = "";

//   userList.forEach((user) => {
//     let newList = document.createElement("li");
//     newList.textContent = `ID: ${user.id} | Name: ${user.name} | Email: ${user.email}`;
//     listContainer.appendChild(newList);
//   });
// }

// 4. RENDER FUNCTIONALITY (Upgraded with .map)
function render() {
  // .map() loops through userList and returns a new array of HTML strings
  let userItemsArray = userList.map((user) => {
    let listop= `<li>ID: ${user.id} | Name: ${user.name} | Email: ${user.email}</li>`;
    console.log(listop)
    return listop
  });

  // .join("") merges the array of strings ['<li>...</li>', '<li>...</li>'] into one big string
  listContainer.innerHTML = userItemsArray.join("");
}


// 5. SHOW USERS FUNCTIONALITY


function showUsers() {
    
  userList.forEach((element) => {
    if (element.hasOwnProperty("email")) {

      console.log(
        Object.keys(element),
        Object.values(element),
        Object.entries(element),
      );
    } else {
      console.log("no valid user");
    }
  });
}

// 6. CLEAR USERS FUNCTIONALITY


function clearUsers() {
  userList = [];
  window.alert("All users cleared!");
  setTimeout(() => {
    render();
    console.log("a new fresh start");
  }, 1000);
}

// 7. DELETE USER FUNCTIONALITY (Practicing .filter)


function deleteUser() {
  // Ask the user which ID they want to remove
  let targetId = window.prompt("Enter the ID of the user you want to delete:");
  if (!targetId) return;

  // Convert the prompt input from a string to a number so it matches our data
  let idToNumber = Number(targetId);

  // .filter() loops through userList and KEEPS only the items that return true.
  // We want to KEEP every user whose ID is NOT equal to the one we want to delete.
  let initialLength = userList.length;
  userList = userList.filter((user) => user.id !== idToNumber);

  // Check if someone was actually deleted
  if (userList.length < initialLength) {
    window.alert(`User with ID ${idToNumber} deleted successfully!`);
    render(); // Update the screen immediately
  } else {
    window.alert("User ID not found.");
  }
}
