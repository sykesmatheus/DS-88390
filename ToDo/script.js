const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim(); // Use .value instead of .ariaValueMax
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = ''; // Clear input after adding the task
    }
});

function addTask(taskText) {
    const listItem = document.createElement('li');
    listItem.className = 'task-item';

    const taskElement = document.createElement('span');
    taskElement.className = 'task-text';
    taskElement.textContent = taskText;

    const editButton = document.createElement('button');
    editButton.className = 'edit-task';
    editButton.textContent = 'Editar';

    const removeButton = document.createElement('button');
    removeButton.className = 'remove-task';
    removeButton.textContent = 'Remover';

    // Remove task functionality
    removeButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    // Edit task functionality
    editButton.addEventListener('click', function() {
        if (editButton.textContent === 'Editar') {
            taskElement.contentEditable = true;
            taskElement.focus();
            editButton.textContent = 'Salvar';
        } else {
            taskElement.contentEditable = false; // Disable editing
            editButton.textContent = 'Editar'; // Reset button text
        }
    });

    // Append task elements to list item
    listItem.appendChild(taskElement);
    listItem.appendChild(editButton);
    listItem.appendChild(removeButton);

    // Append list item to the task list
    taskList.appendChild(listItem);
}
