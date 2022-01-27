import uuid from "react-uuid";

const AddTodoForm = ({
  todoText,
  setTodoText,
  todos,
  setTodos,
  todoStatus,
  setTodoStatus,
}) => {
  const getTodoText = (e) => {
    setTodoText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: todoText, completed: false, id: uuid() }]);
    setTodoText("");
  };

  const filterTodoHandler = (e) => {
    setTodoStatus(e.target.value);
  };

  return (
    <form onSubmit={submitTodoHandler}>
      <input
        type="text"
        className="todo-input"
        onChange={getTodoText}
        value={todoText}
      />
      <button className="todo-btn" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select
          name="todos"
          className="filter-todo"
          onChange={filterTodoHandler}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incompleted">Incompleted</option>
        </select>
      </div>
    </form>
  );
};

export default AddTodoForm;
