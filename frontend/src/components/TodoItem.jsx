import { deleteTodo, updateTodo } from "../services/api";

function TodoItem({ todo, fetchTodos }) {
  const handleDelete = async () => {
    await deleteTodo(todo._id);
    fetchTodos();
  };

  const handleToggle = async () => {
    await updateTodo(todo._id, { completed: !todo.completed });
    fetchTodos();
  };

  return (
    <div style={{ margin: "10px 0" }}>
      <span
        onClick={handleToggle}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {todo.title}
      </span>

      <button onClick={handleDelete} style={{ marginLeft: "10px" }}>
        Delete
      </button>
    </div>
  );
}

export default TodoItem;