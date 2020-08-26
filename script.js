const gridContainer = document.querySelector(".gridContainer")
const uInput = document.getElementById("quantity");
const button1 = document.querySelector("#button1");

function createGrid (){
  for (let i = 0; i < 256; i++){
    let div = document.createElement("div");
    div.classList.add('cell')
    div.attributes.width = 575/256;
    div.attributes.length = 575/256;
    gridContainer.appendChild(div);
  }
};

const square = document.querySelector("div");
square.addEventListener("mouseover", function(event){
  event.target.classList.replace("cell","coloured")
})

function clearGrid(){
  gridContainer.innerHTML = "";
  gridContainer.style.setProperty(
    "grid-template-columns",
    `repeat(16, 2fr)`
  );
  gridContainer.style.setProperty(
    "grid-template-rows",
    `repeat(16, 2fr)`
  );
  createGrid();
};

button1.addEventListener("click", clearGrid);

valGrid = () => {
  gridContainer.innerHTML = "";
  gridContainer.style.setProperty(
    "grid-template-columns",
    `repeat(${uInput.value}, 2fr)`
  );
  gridContainer.style.setProperty(
    "grid-template-rows",
    `repeat(${uInput.value}, 2fr)`
  );
  for (let i = 0; i < uInput.value * uInput.value; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    gridContainer.appendChild(div);
  }
  console.log(userInput.value);
};


updateBtn.addEventListener("click", valGrid);

createGrid();
