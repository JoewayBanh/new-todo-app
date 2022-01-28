import Todo from "./Todo";

const TodoList = ({
  todos,
  setTodos,
  filteredTodos,
  setTodoEditingTrigger,
  setEditingText,
  editingText,
  todoEditingTrigger,
  addSubtaskTrigger,
  setAddSubtaskTrigger,
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
            setTodoEditingTrigger={setTodoEditingTrigger}
            setEditingText={setEditingText}
            editingText={editingText}
            todoEditingTrigger={todoEditingTrigger}
            addSubtaskTrigger={addSubtaskTrigger}
            setAddSubtaskTrigger={setAddSubtaskTrigger}
            subtasks={subtasks}
            setSubtasks={setSubtasks}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
