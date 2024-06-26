document.addEventListener('DOMContentLoaded', () => {
  const todoForm = document.getElementById('todo-form');
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');

  // Load todos from localStorage
  loadTodos();

  // Add new todo
  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTodo(todoInput.value);
    todoInput.value = '';
  });

  // Add todo item
  function addTodo(todoText) {
    const todoItem = document.createElement('li');
    todoItem.innerText = todoText;
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'X';
    deleteButton.addEventListener('click', () => {
      todoItem.remove();
      saveTodos();
    });
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
    saveTodos();
  }

  // Save todos to localStorage
  function saveTodos() {
    const todos = [];
    todoList.querySelectorAll('li').forEach(todoItem => {
      todos.push(todoItem.firstChild.textContent);
    });
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  // Load todos from localStorage
  function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todoText => {
      addTodo(todoText);
    });
  }
});
