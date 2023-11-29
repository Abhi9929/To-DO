const taskList = document.getElementById("task-list");
const inputTask = document.getElementById("task_box");
const addBtn = document.getElementById("add_btn");

  let h3IdCounter = 1;  
addBtn.addEventListener("click", () => {
  let newTask = inputTask.value.toUpperCase();


  if (newTask == "") {
    window.alert("Please Add a Task!!");
  } else {
    taskList.innerHTML += `
        <div class="task_box">
        <div class="tasks">
        <h3 id="${1}">${newTask}</h3>
        <button class="remove_btn"><i class="fa-solid fa-trash"></i></button>
        </div>
        </div>
        `;
  }


  const trashButtons = document.querySelectorAll(".remove_btn");

  trashButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.parentNode.parentNode.remove();
    });
  });
});

