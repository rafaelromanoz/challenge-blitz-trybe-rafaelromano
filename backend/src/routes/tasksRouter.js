const express = require('express');
const { createTaskController, updateTaskController, deleteTaskController } = require('../controllers/tasksController');

const tasksRouter = express.Router();

tasksRouter.post('/', createTaskController);
tasksRouter.put('/', updateTaskController);
tasksRouter.delete('/', deleteTaskController);

module.exports = tasksRouter;
