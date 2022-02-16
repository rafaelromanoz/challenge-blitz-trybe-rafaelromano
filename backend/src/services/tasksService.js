const { insertTaskModel, updateTaskModel } = require('../models/tasksModel');
const { taskSchema } = require('../schemas/schemas');
const { createErrorMessage } = require('../utils/functions');

const validateTaskRequestData = (task) => {
  const { error } = taskSchema.validate(task);
  if (error) throw createErrorMessage(400, error.message);
};

const createTaskService = async (task) => {
  validateTaskRequestData(task);
  const { id } = await insertTaskModel(task);
  return {
    id,
    ...task,
  };
};

const updateTaskService = async (task) => {
  await updateTaskModel(task.id, task);
  return {
    id: task.id,
    ...task,
  };
};

module.exports = {
  createTaskService,
  updateTaskService,
};
