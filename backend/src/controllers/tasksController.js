const { deleteTaskModel } = require('../models/tasksModel');
const { createTaskService, updateTaskService } = require('../services/tasksService');

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
    const updatedTask = await updateTaskService(req.body);
    return res.status(200).json(updatedTask);
  } catch (error) {
    return next(error);
  }
};

const deleteTaskController = async (req, res, next) => {
  try {
    const { id } = req.params;
    await deleteTaskModel(id);
    return res.status(200).json({});
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createTaskController,
  updateTaskController,
  deleteTaskController,
};
