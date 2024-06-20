document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput').value;
    const dueDateInput = document.getElementById('dueDateInput').value;
    const priorityInput = document.getElementById('priorityInput').value;
    const categoryInput = document.getElementById('categoryInput').value;

    if (taskInput === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');
    listItem.classList.add('task-item');

    listItem.innerHTML = `
        <div class="task-details">
            <span class="task-name">${taskInput}</span>
            <span class="task-category">Category: ${categoryInput}</span>
            <span class="task-due-date">Due: ${dueDateInput}</span>
            <span class="task-priority">Priority: ${priorityInput}</span>
        </div>
        <div class="task-actions">
            <button class="complete">Complete</button>
            <button class="delete">Delete</button>
        </div>
    `;

    listItem.querySelector('.complete').addEventListener('click', () => {
        listItem.classList.toggle('complete');
    });

    listItem.querySelector('.delete').addEventListener('click', () => {
        taskList.removeChild(listItem);
    });

    taskList.appendChild(listItem);

    // Clear the input fields
    document.getElementById('taskInput').value = '';
    document.getElementById('dueDateInput').value = '';
    document.getElementById('priorityInput').value = 'low';
    document.getElementById('categoryInput').value = '';
}
