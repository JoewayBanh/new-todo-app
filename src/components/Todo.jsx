const Todo = ({ text, todos, setTodos, todo }) => {
  const deleteTodoHandler = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };

  const completeTodoHandler = () => {
    setTodos(
      todos.map((element) => {
        if (element.id === todo.id) {
          return {
            ...element,
            completed: !element.completed,
          };
        }
        return element;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button className="complete-btn" onClick={completeTodoHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="remove-btn" onClick={deleteTodoHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
