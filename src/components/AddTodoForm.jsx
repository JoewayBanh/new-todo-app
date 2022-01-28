import uuid from "react-uuid";

const AddTodoForm = ({
  todoText,
  setTodoText,
  todoSubtitle,
  setTodoSubtitle,
  todoNotes,
  setTodoNotes,
  todos,
  setTodos,
  setTodoStatus,
  todoPriority,
  setTodoPriority,
}) => {
  const getTodoText = (e) => {
    setTodoText(e.target.value);
  };
  const getTodoSubtitle = (e) => {
    setTodoSubtitle(e.target.value);
  };
  const getTodoNotes = (e) => {
    setTodoNotes(e.target.value);
  };
  const getTodoPriority = (e) => {
    setTodoPriority(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();

    const newTodo = {
      text: todoText,
      subtitle: todoSubtitle,
      notes: todoNotes,
      completed: false,
      id: uuid(),
    };

    setTodos([...todos].concat(newTodo));
    setTodoText("");
    setTodoSubtitle("");
    setTodoNotes("");
    setTodoPriority("");
  };

  const filterTodoHandler = (e) => {
    setTodoStatus(e.target.value);
  };

  return (
    <form className="todo-form" onSubmit={submitTodoHandler}>
      <div className="add-form-data">
        <input
          type="text"
          className="todo-input title"
          placeholder="Type in new todo"
          onChange={getTodoText}
          value={todoText}
          required
          maxLength={30}
        />
        <input
          type="text"
          className="todo-input subtitle"
          placeholder="Subtitle for todo"
          onChange={getTodoSubtitle}
          value={todoSubtitle}
          required
          maxLength={50}
        />
        <input
          type="text"
          className="todo-input notes"
          placeholder="Notes"
          onChange={getTodoNotes}
          value={todoNotes}
          required
          maxLength={50}
        />
        <div className="select priority">
          <select
            className="priority-dropdown "
            name="priority"
            id="prioritySelection"
            placeholder="Select priority"
            onChange={getTodoPriority}
            value={todoPriority}
            required
          >
            <option value="" disabled hidden>
              Select priority
            </option>
            <option value="Not urgent">Not urgent</option>
            <option value="Urgent">Urgent</option>
            <option value="Very urgent">Very Urgent</option>
          </select>
        </div>
        <button className="todo-btn" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
      </div>
      <div className="select">
        <select
          name="todos"
          className="filter-todo"
          onChange={filterTodoHandler}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
    </form>
  );
};

export default AddTodoForm;
