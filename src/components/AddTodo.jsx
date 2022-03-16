import React, { useState } from "react";

export default function AddTodo({ setTodo }) {
  const [formValue, setFormValue] = useState();

  function handleOnchange(e) {
    setFormValue(e.target.value);
    if (e.key === "Enter") {
      e.preventDefault();
      setFormValue("");
      let todo = {
        name: e.target.value,
        type: "view",
        category: "Active",
      };
      setTodo(todo);
    }
  }

  return (
    <div>
      <form>
        <input
          value={formValue}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onKeyDown={handleOnchange}
          onChange={handleOnchange}
        />
      </form>
    </div>
  );
}
