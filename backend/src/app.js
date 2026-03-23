const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const todoRoutes = require("./routes/todo.routes");
const errorHandler = require("./middleware/error.middleware");

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/todos", todoRoutes);

// Error Middleware
app.use(errorHandler);

module.exports = app;