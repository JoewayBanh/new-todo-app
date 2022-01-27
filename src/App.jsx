import AddTodoForm from "./components/AddTodoForm";
import "./App.css";
import TodoList from "./components/TodoList";
import { useState, useEffect, useLayoutEffect } from "react";

function App() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  const [todoStatus, setTodoStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    loadSavedTodos();
  }, []);
  useEffect(() => {
    filterTodosHandler();
    saveTodos();
  }, [todoStatus, todos]);

  const filterTodosHandler = () => {
    switch (todoStatus) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "incompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveTodos = () => {
    localStorage.setItem("Todo List", JSON.stringify(todos));
  };
  const loadSavedTodos = () => {
    if (localStorage.getItem("Todo List") === null) {
      localStorage.setItem("Todo List", JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localStorage.getItem("Todo List")));
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Todo List test</h1>
      </header>
      <AddTodoForm
        todoText={todoText}
        setTodoText={setTodoText}
        todos={todos}
        setTodos={setTodos}
        todoStatus={todoStatus}
        setTodoStatus={setTodoStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
