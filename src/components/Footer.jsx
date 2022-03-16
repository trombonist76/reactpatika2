import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <span className="todo-count">
          <strong>2</strong>
          items left
        </span>

        <Filters />

        <button className="clear-completed">Clear completed</button>
      </footer>
    </div>
  );
}
