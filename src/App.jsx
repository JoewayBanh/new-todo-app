import AddTodoForm from "./components/AddTodoForm";
import "./App.css";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";

function App() {
  const [todoText, setTodoText] = useState("");
  const [todoSubtitle, setTodoSubtitle] = useState("");
  const [todoNotes, setTodoNotes] = useState("");
  const [todos, setTodos] = useState([]);
  const [todoStatus, setTodoStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [todoPriority, setTodoPriority] = useState("");
  const [addSubtask, setAddSubtask] = useState(null);
  const [subtasks, setSubtasks] = useState([]);

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
      case "incomplete":
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
        todoSubtitle={todoSubtitle}
        setTodoSubtitle={setTodoSubtitle}
        todoNotes={todoNotes}
        setTodoNotes={setTodoNotes}
        todos={todos}
        setTodos={setTodos}
        todoStatus={todoStatus}
        setTodoStatus={setTodoStatus}
        todoPriority={todoPriority}
        setTodoPriority={setTodoPriority}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
        setTodoEditing={setTodoEditing}
        setEditingText={setEditingText}
        editingText={editingText}
        todoEditing={todoEditing}
        addSubtask={addSubtask}
        setAddSubtask={setAddSubtask}
        subtasks={subtasks}
        setSubtasks={setSubtasks}
      />
    </div>
  );
}

export default App;
