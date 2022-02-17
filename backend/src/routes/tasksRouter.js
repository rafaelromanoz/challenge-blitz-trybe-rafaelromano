const express = require('express');
const {
  createTaskController,
  updateTaskController,
  deleteTaskController,
  getAllTasksController,
} = require('../controllers/tasksController');

const tasksRouter = express.Router();

tasksRouter.get('/', getAllTasksController);
tasksRouter.post('/', createTaskController);
tasksRouter.put('/', updateTaskController);
tasksRouter.delete('/', deleteTaskController);

module.exports = tasksRouter;
