const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getAllTasksModel = async () => {
  const connectionInstance = await connection();
  const tasks = await connectionInstance.collection('tasks').find({}).toArray();
  return tasks;
};

const insertTaskModel = async (task) => {
  const connectionInstance = await connection();
  const { insertedId } = await connectionInstance.collection('tasks').insertOne({ ...task });
  return {
    id: insertedId,
  };
};

const updateTaskModel = async (task) => {
  const connectionInstance = await connection();
  await connectionInstance.collection('tasks')
    .updateOne(
      { _id: ObjectId(task.id) },
      { $set: { ...task } },
    );
};

const deleteTaskModel = async (body) => {
  const connectionInstance = await connection();
  await connectionInstance.collection('tasks').deleteOne({ _id: ObjectId(body.id) });
};

module.exports = {
  insertTaskModel,
  updateTaskModel,
  deleteTaskModel,
  getAllTasksModel,
};
