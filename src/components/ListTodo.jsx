import React from "react";

export default function ListTodo({ todos, setTodos, category }) {
    const filteredTodos = category !== "All" ? todos.filter(todo=>todo.category===category) : todos
  function checkboxHandler(e, name) {
    if (e.target.checked) {
      let newTodos = todos.map((todo) => {
        if (todo.name === name) {
          todo.type = "completed";
          todo.category = "Completed"
        }
        return todo;
      });
      setTodos(newTodos);
    } else {
      let newTodos = todos.map((todo) => {
        if (todo.name === name) {
          todo.type = "view";
          todo.category = "Active"
        }
        return todo;
      });
      setTodos(newTodos);
    }
  }

  function removeHandler(e, name) {
    let newTodos = todos.filter((todo) => todo.name !== name);
    setTodos(newTodos);
  }

  return (
      <div>
        {console.log(category)}
        {console.log(filteredTodos)}
      <ul className="todo-list">
        {filteredTodos.map((todo, i) => (
          <li key={i} className={todo.type}>
            <div className={todo.type}>
              <input
                id="checkbox"
                onClick={(e) => {
                  checkboxHandler(e, todo.name);
                }}
                className="toggle"
                type="checkbox"
                checked={todo.type=== "completed" ? true:false}
              />
              <label >{todo.name}</label>
              <button
                onClick={(e) => removeHandler(e, todo.name)}
                className="destroy"
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
