document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('task-list');
    const inputTask = document.getElementById('task_box');
    const addBtn = document.getElementById('add_btn');

    let taskIdCounter = 1; // Counter for creating unique IDs

    addBtn.addEventListener('click', () => {
        let newTask = inputTask.value.toUpperCase();
        const taskId = `task_${taskIdCounter}`;
        const removeBtnId = `remove_btn_${taskIdCounter}`;

        taskList.innerHTML += `
        <div class="task_box" id="${taskId}">
            <div class="tasks">
                <h3>${newTask}</h3>
                <button class="remove_btn" id="${removeBtnId}"><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>
        `;

        // Increment the counter for the next task
        taskIdCounter++;

        // Now, select the dynamically created elements using their IDs and attach event listeners
        const taskElement = document.getElementById(taskId);
        const removeBtn = document.getElementById(removeBtnId);

        removeBtn.addEventListener('click', () => {
            // Your remove logic here
            taskElement.remove(); // Remove the entire task_box div
        });
    });
});
