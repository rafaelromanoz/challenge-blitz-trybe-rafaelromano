const express = require('express');
const { createTaskController } = require('../controllers/tasksController');

const tasksRouter = express.Router();

tasksRouter.post('/create', createTaskController);

module.exports = tasksRouter;
