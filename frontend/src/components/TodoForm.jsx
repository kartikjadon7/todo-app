import { useState } from "react";
import API from "../services/api";

const TodoForm = ({ fetchTodos }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return;

    await API.post("/todos", { title });
    setTitle("");
    fetchTodos(); // 🔥 no reload
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default TodoForm;