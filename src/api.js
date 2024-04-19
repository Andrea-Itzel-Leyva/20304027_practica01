const express = require("express");
const { json } = require("body-parser");
const { getAll, getById, createTask, updateTask, deleteTask } = require("./tasksRepository");

const app = express();
const port = 3000;

app.use(json());

let tasks = [
  { id: 1, title: 'Task 1', description: 'Do something' },
  { id: 2, title: 'Task 2', description: 'Do something else' },
];

// Get all tasks
app.get('/tasks', (req, res) => {
  const  tasks = getAll();
  res.json(tasks);
});

// Get a specific task
app.get('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = getById(taskId)

  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

// Create a new task
app.post('/tasks', (req, res) => {
  const newTask = req.body;
  createTask(newTask)
  res.status(201).json(newTask);
});

// Update a task
app.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const updatedTask = req.body;
  const task =  updateTask(taskId, updatedTask);

  if (index != null) {
    res.json(task);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  deleteTask(taskId)
  res.sendStatus(204);
});

module.exports = app;
