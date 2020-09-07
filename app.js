const input = document.querySelector(".input");
const todoBtn = document.querySelector(".button-todo");
const ul = document.querySelector(".todolist");
const chooseTodo = document.querySelector("#choose-todo");

const addTodos = (e) => {
  e.preventDefault();
  if (input.value.length > 0) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("todo");

    const li = document.createElement("li");
    li.textContent = input.value;
    li.classList.add("todo-items");
    newDiv.appendChild(li);

    const completeBtn = document.createElement("btn");
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';
    completeBtn.classList.add("complete-btn");
    newDiv.appendChild(completeBtn);

    const trashBtn = document.createElement("btn");
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add("trash-btn");
    newDiv.appendChild(trashBtn);

    ul.appendChild(newDiv);

    input.value = "";
  }
};

const deleteTodos = (e) => {
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }
};

const checkTodos = (e) => {
  const item = e.target;
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
};

const selectTodos = (e) => {
  const todos = ul.childNodes;
  todos.forEach((todo) => {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        todo.classList.contains("completed")
          ? (todo.style.display = "flex")
          : (todo.style.display = "none");
        break;
      case "uncompleted":
        !todo.classList.contains("completed")
          ? (todo.style.display = "flex")
          : (todo.style.display = "none");
        break;
    }
  });
};

todoBtn.addEventListener("click", addTodos);
ul.addEventListener("click", deleteTodos);
ul.addEventListener("click", checkTodos);
chooseTodo.addEventListener("click", selectTodos);
