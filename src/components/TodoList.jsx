import Todo from "./Todo";

const TodoList = ({
  todos,
  setTodos,
  filteredTodos,
  setTodoEditing,
  setEditingText,
  editingText,
  todoEditing,
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
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
