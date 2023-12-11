const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("task_box");
const addBtn = document.getElementById("add_btn");


(function addTask() {

  addBtn.addEventListener("click", () => {
    let newTask = inputBox.value.toUpperCase();
  if (newTask == "") {
    window.alert("Please Add a Task!!");
  } else {
    const li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  inputBox.focus();
  saveData();
});
})();

(function reviewTask() {
  listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentNode.remove();
      saveData();
    }
  });
})();

// To save our data on browser:
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

(function showList() {
  listContainer.innerHTML = localStorage.getItem("data");
})();
