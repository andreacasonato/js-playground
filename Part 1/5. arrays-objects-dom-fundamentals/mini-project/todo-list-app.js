// Data Structure: Array of todo objects
let todos = [];
let nextId = 1;

// DOM Elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const statsDiv = document.getElementById('stats');
const totalTasksSpan = document.getElementById('totalTasks');
const completedTasksSpan = document.getElementById('completedTasks');
const pendingTasksSpan = document.getElementById('pendingTasks');

// Add New Task Function
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create new todo object
    const newTodo = {
        id: nextId++,
        task: taskText,
        isCompleted: false
    };

    // Add to array
    todos.push(newTodo);

    // Clear input field
    taskInput.value = '';

    // Re-render the list
    renderTodos();
}

// Render Todos Function
function renderTodos() {
    // Clear existing list
    todoList.innerHTML = '';

    if (todos.length === 0) {
        todoList.innerHTML = '<div class="empty-state">No tasks yet. Add one above to get started!</div>';
        statsDiv.style.display = 'none';
        return;
    }

    // Show stats
    statsDiv.style.display = 'block';
    updateStats();

    // Create HTML elements for each todo
    todos.forEach((todo, index) => {
        const listItem = document.createElement('li');
        listItem.className = `todo-item ${todo.isCompleted ? 'completed' : ''}`;

        listItem.innerHTML = `
            <span class="task-text">${todo.task}</span>
            <div class="todo-actions">
                <button class="complete-btn ${todo.isCompleted ? 'completed' : ''}" data-index="${index}">
                    ${todo.isCompleted ? '✓ Done' : 'Complete'}
                </button>
                <button class="remove-btn" data-index="${index}">Remove</button>
            </div>
        `;

        todoList.appendChild(listItem);
    });

    // Add event listeners to all buttons
    addEventListeners();
}

// Add Event Listeners to Buttons
function addEventListeners() {
    // Complete buttons
    const completeBtns = document.querySelectorAll('.complete-btn');
    completeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-index'));
            toggleComplete(index);
        });
    });

    // Remove buttons
    const removeBtns = document.querySelectorAll('.remove-btn');
    removeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-index'));
            removeTask(index);
        });
    });
}

// Toggle Complete Status
function toggleComplete(index) {
    todos[index].isCompleted = !todos[index].isCompleted;
    renderTodos();
}

// Remove Task Function
function removeTask(index) {
    if (confirm('Are you sure you want to remove this task?')) {
        todos.splice(index, 1);
        renderTodos();
    }
}

// Update Statistics
function updateStats() {
    const total = todos.length;
    const completed = todos.filter(todo => todo.isCompleted).length;
    const pending = total - completed;

    totalTasksSpan.textContent = total;
    completedTasksSpan.textContent = completed;
    pendingTasksSpan.textContent = pending;
}

// Event Listeners
addBtn.addEventListener('click', addTask);

// Allow Enter key to add tasks
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Initial render
renderTodos();