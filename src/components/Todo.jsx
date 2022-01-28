const Todo = ({
  text,
  todos,
  setTodos,
  todo,
  setTodoEditing,
  setEditingText,
  editingText,
  todoEditing,
  subtitle,
  notes,
  addSubtask,
  setAddSubtask,
  subtasks,
  setSubtasks,
}) => {
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

  const updateTodoNameHandler = (e) => {
    setEditingText(e.target.value);
  };

  const editTodo = (id) => {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id && editingText !== "") {
        todo.text = editingText;
      }
      return todo;
    });

    setTodos(updatedTodos);
    setTodoEditing(null);
    setEditingText("");
  };

  // const addSubtaskHandler = (e) => {
  //   setSubtasks(e.target.value);
  // };

  return (
    <div className="todo">
      {todoEditing === todo.id ? (
        <input
          className="todo-edit"
          type="text"
          placeholder={text}
          onChange={updateTodoNameHandler}
          value={editingText}
          maxLength={50}
        />
      ) : (
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
          <h2 className="todo-title">{text}</h2>
          <h3 className="todo-subtitle">Subtitle: {subtitle}</h3>
          <h4 className="todo-notes">Notes: {notes}</h4>

          {/* <input type="checkbox" name="" id="subtask" />
          {subtasks} */}
        </li>
      )}

      {/* {addSubtask === todo.id ? (
        <>
          <input
            className="new-subtask"
            type="text"
            placeholder="subtask"
            onChange={addSubtaskHandler}
            value={subtasks}
            maxLength={50}
          />
          <button type="submit">+</button>
        </>
      ) : (
        ""
      )} */}

      {todoEditing === todo.id ? (
        <button className="save-edit" onClick={() => editTodo(todo.id)}>
          <i className="fas fa-save"></i>
        </button>
      ) : (
        <>
          <button
            className="add-subtask"
            onClick={() => {
              setAddSubtask(todo.id);
            }}
          >
            <i className="fas fa-plus"></i>
          </button>

          <button
            className="edit-btn"
            onClick={() => {
              setTodoEditing(todo.id);
            }}
          >
            <i className="fas fa-pen"></i>
          </button>

          <button className="complete-btn" onClick={completeTodoHandler}>
            <i className="fas fa-check"></i>
          </button>

          <button className="remove-btn" onClick={deleteTodoHandler}>
            <i className="fas fa-trash"></i>
          </button>
        </>
      )}
    </div>
  );
};

export default Todo;
