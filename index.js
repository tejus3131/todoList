const todoList = document.querySelector('#todo-list');
const addTodoBtn = document.querySelector('#addtodo');
const todoTitle = document.querySelector('#title');
const todoDesc = document.querySelector('#description');
const todoDate = document.querySelector('#date');
const todoTime = document.querySelector('#time');
const todoPriority = document.querySelector('#priority');
const todoStatus = document.querySelector('#status');

let todos = [];




function renderTodos() {
  if (todos.length == 0) {
    todoList.innerHTML = `<h3 class="no-todos">No tasks added yet</h3>`;
  }
  else {

    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
      const todoItem = document.createElement('li');
      todoItem.classList.add('todo-item');
      todoItem.innerHTML = `
      <div class="todo">
      <div class="todo-header">
      <h3 class="todo-title">${todo.title}</h3>
      <div class="commands">
      <button class="btn edit" data-index="${index}">Edit</button>
      <button class="btn delete" data-index="${index}">Delete</button>
      </div>
      </div>
    <div class="todo-body">
      <p class="todo-description">
      ${todo.description}
      </p>
      <div class="todo-footer">
        <p class="todo-date">
          ${todo.date}
        </p>
        <p class="todo-time">
        ${todo.time}
        </p>
        <p class="todo-priority">
        ${todo.priority}
        </p>
        <p class="todo-status">
        ${todo.status}
        </p>
        </div>
        </div>
        </div>
        `;
      todoList.appendChild(todoItem);
    });
  }
}

function addTodo() {
  const title = todoTitle.value;
  const description = todoDesc.value;
  const date = todoDate.value;
  const time = todoTime.value;
  const priority = todoPriority.value;
  const status = todoStatus.value;
  if (title) {
    if (description) {
      if (date) {
        if (time) {
          if (priority != "") {
            if (status != "") {
              const newTodo = { title: title, description: description, date: date, time: time, priority: priority, status: status };
              todos.push(newTodo);
              renderTodos();
              todoTitle.value = "";
              todoDesc.value = "";
              todoDate.value = "";
              todoTime.value = "";
              todoPriority.value = "";
              todoStatus.value = "";
            } else {
              alert("Please enter the status of the task");
            }
          } else {
            alert("Please enter the priority of the task");
          }
        } else {
          alert("Please enter the time of the task");
        }
      } else {
        alert("Please enter the date of the task");
      }
    } else {
      alert("Please enter the description of the task");
    }
  } else {
    alert("Please enter the title of the task");
  }
}




function editTodo(index) {
  todoTitle.value = todos[index].title;
  todoDesc.value = todos[index].description;
  todoDate.value = todos[index].date;
  todoTime.value = todos[index].time;
  todoPriority.value = todos[index].priority;
  todoStatus.value = todos[index].status;
  deleteTodo(index)
  renderTodos();

}

function testing() {
  todos.push({ title: "title", description: "description", date: "date", time: "time", priority: "priority", status: "status" });
  renderTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

// addTodoBtn.addEventListener('click', addTodo);

todoList.addEventListener('click', event => {
  if (event.target.classList.contains('edit')) {
    const index = event.target.dataset.index;
    editTodo(index);
  } else if (event.target.classList.contains('delete')) {
    const index = event.target.dataset.index;
    deleteTodo(index);
  }
});

renderTodos();