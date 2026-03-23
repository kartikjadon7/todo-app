const Todo = require("../models/todo.model");

// Create Todo
exports.createTodo = async (req, res, next) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json(todo);
  } catch (error) {
    next(error);
  }
};

// Get All Todos
exports.getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    next(error);
  }
};

// Get Single Todo
exports.getTodoById = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    res.json(todo);
  } catch (error) {
    next(error);
  }
};

// Update Todo
exports.updateTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(todo);
  } catch (error) {
    next(error);
  }
};

// Delete Todo
exports.deleteTodo = async (req, res, next) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo deleted" });
  } catch (error) {
    next(error);
  }
};