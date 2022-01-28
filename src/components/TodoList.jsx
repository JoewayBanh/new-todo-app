import Todo from "./Todo";

const TodoList = ({
  todos,
  setTodos,
  filteredTodos,
  setTodoEditing,
  setEditingText,
  editingText,
  todoEditing,
  addSubtask,
  setAddSubtask,
  subtasks,
  setSubtasks,
}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            subtitle={todo.subtitle}
            notes={todo.notes}
            todos={todos}
            setTodos={setTodos}
            todo={todo}
            setTodoEditing={setTodoEditing}
            setEditingText={setEditingText}
            editingText={editingText}
            todoEditing={todoEditing}
            addSubtask={addSubtask}
            setAddSubtask={setAddSubtask}
            subtasks={subtasks}
            setSubtasks={setSubtasks}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
