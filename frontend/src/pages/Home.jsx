import { useEffect, useState } from "react";
import { getTodos } from "../services/api";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

function Home() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const res = await getTodos();
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="container">
      <h1>Todo App</h1>
      <TodoForm fetchTodos={fetchTodos} />
      <TodoList todos={todos} fetchTodos={fetchTodos} />
    </div>
  );
}

export default Home;