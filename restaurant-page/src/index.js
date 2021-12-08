import "styles.css";

// //Getters

// //EventListeners

// //Functions

// function createHeader() {
//   const header = document.createElement("header");

//   const takeawayName = document.createElement("h1");
//   restaurantName.classList.add("title");
//   restaurantName.textContent = "The Great Wall Chinese Takeaway";

//   header.appendChild(restaurantName);
//   // header.appendChild(createNav());

//   document.body.append(restaurantName);

// }

// function initializeWebsite() {
//   const content = document.getElementById("content");
// }

// createHeader();
let div = document.createElement("div");
div.className = "alert";
div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";

document.body.append(div);
