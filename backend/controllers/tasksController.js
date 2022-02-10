const { createTaskService } = require('../services/tasksService');

const createTaskController = async (req, res, next) => {
  try {
    const createdTask = await createTaskService(req.body);
    return res.status(201).json(createdTask);
  } catch (error) {
    return next(error);
  }
};

const updateTaskController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedTask = await createTaskService(id, req.body);
    return res.status(200).json(updatedTask);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createTaskController,
  updateTaskController,
};
