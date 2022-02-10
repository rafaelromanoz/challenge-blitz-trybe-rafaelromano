const express = require('express');
const { createTaskController } = require('../controllers/tasksController');

const tasksRouter = express.Router();

tasksRouter.post('/', createTaskController);
tasksRouter.put('/:id', updateTaskController);

module.exports = tasksRouter;
