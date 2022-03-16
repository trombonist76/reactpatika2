import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';
import { useState } from 'react';
import Filters from './components/Filters';

function App() {
  const [todos, setTodos] = useState([])
  const [category, setCategory] = useState("All")
  
  function handleSetTodo(todo){
    let isInTodos = todos.find(td=>td.name===todo.name)
    if (!isInTodos) {
      setTodos([...todos,todo])
    }
  }

  function removeCompleteds(){
    let removedCompleteds = todos.filter(todo=>todo.category !== "Completed")
    setTodos(removedCompleteds)
  }

  return (
    <div className="App">
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <AddTodo setTodo={handleSetTodo} todos={todos}/>
        </header>
        <section className="main">
          <input className="toggle-all" type="checkbox"/>
            <label htmlFor="toggle-all">
              Mark all as complete
            </label>

          <ListTodo todos={todos} setTodos={setTodos} category={category}/>
        </section>

        <footer className="footer">

          <span className="todo-count">
            <strong>{category !== "All" ? todos.filter(todo=> todo.category===category).length: todos.length}</strong>
            <span>&nbsp;items {category==="All" ? "left" : category}</span>
            
          </span>

          <Filters setCategory={setCategory}/>

          <button onClick={removeCompleteds} className="clear-completed">
            Clear completed
          </button>
        </footer>
      </section>

      <footer className="info">
        <p>Click to edit a todo</p>
        <p>Created by Dmitry Sharabin</p>
        <p>Part of </p>
      </footer>
    </div>
  );
}

export default App;
