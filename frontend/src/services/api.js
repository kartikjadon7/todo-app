import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// GET TODOS
export const getTodos = () => API.get("/todos");

// CREATE TODO
export const createTodo = (data) => API.post("/todos", data);

// UPDATE TODO
export const updateTodo = (id, data) => API.put(`/todos/${id}`, data);

// DELETE TODO
export const deleteTodo = (id) => API.delete(`/todos/${id}`);