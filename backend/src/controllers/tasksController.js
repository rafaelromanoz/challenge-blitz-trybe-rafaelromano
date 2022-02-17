const { deleteTaskModel, getAllTasksModel } = require('../models/tasksModel');
const { createTaskService, updateTaskService } = require('../services/tasksService');

const getAllTasksController = async (_req, res, next) => {
  try {
    const tasks = await getAllTasksModel();
    return res.status(200).json(tasks);
  } catch (error) {
    return next(error);
  }
};

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
    await deleteTaskModel(req.body);
    return res.status(200).json({});
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createTaskController,
  updateTaskController,
  deleteTaskController,
  getAllTasksController,
};
