const createTaskController = async (req, res, next) => {
  try {
    const createdTask = await createTaskService(req.body);
    return res.status(201).json(createdTask);
  } catch (error) {
    console.log(error.message);
    return next(error);
  }
};

module.exports = {
  createTaskController,
};
