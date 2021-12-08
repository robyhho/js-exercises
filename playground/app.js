const ul = document.querySelector("#ul");
ul.onmousedown = () => false;
ul.addEventListener("click", (event) => {
  if (event.target.tagName != "LI") return;

  if (event.ctrlKey || event.metaKey) {
    toggleSelect(event.target);
  } else {
    singleSelect(event.target);
  }
});

function toggleSelect(li) {
  li.classList.toggle("selected");
}

function singleSelect(li) {
  let selected = ul.querySelectorAll(".selected");
  for (let elem of selected) {
    elem.classList.remove("selected");
  }
  li.classList.add("selected");
}
n;
