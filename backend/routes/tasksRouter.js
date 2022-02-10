const express = require('express');
const { createTaskController, updateTaskController, deleteTaskController } = require('../controllers/tasksController');

const tasksRouter = express.Router();

tasksRouter.post('/', createTaskController);
tasksRouter.put('/:id', updateTaskController);
tasksRouter.delete('/:id', deleteTaskController);

module.exports = tasksRouter;
