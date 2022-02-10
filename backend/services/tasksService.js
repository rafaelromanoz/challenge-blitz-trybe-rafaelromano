const { insertTaskModel } = require('../models/tasksModel');
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

module.exports = {
  createTaskService,
};
