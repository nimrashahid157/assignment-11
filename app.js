document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const deleteAllBtn = document.getElementById('deleteAllBtn');
    const taskList = document.getElementById('taskList');

    addBtn.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button class="editBtn">Edit</button>
                <button class="deleteBtn">Delete</button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = '';

            const editBtn = listItem.querySelector('.editBtn');
            const deleteBtn = listItem.querySelector('.deleteBtn');

            editBtn.addEventListener('click', function () {
                const newText = prompt('Edit task:', taskText);
                if (newText !== null) {
                    listItem.querySelector('span').textContent = newText;
                }
            });

            deleteBtn.addEventListener('click', function () {
                listItem.remove();
            });
        }
    });

    deleteAllBtn.addEventListener('click', function () {
        taskList.innerHTML = '';
    });
});
