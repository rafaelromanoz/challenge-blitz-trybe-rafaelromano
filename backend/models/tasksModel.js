const { ObjectId } = require('mongodb');
const connection = require('./connection');

const insertTaskModel = async (task) => {
  const connectionInstance = await connection();
  const { insertedId } = await connectionInstance.collection('tasks').insertOne({ ...task });
  return {
    id: insertedId,
  };
};

const updateTaskModel = async (id, task) => {
  const connectionInstance = await connection();
  await connectionInstance.collection('tasks')
    .updateOne(
      { _id: ObjectId(id) },
      { $set: { ...task } },
    );
};

const deleteTaskModel = async (id) => {
  const connectionInstance = await connection();
  const teste = connectionInstance.deleteOne({ _id: ObjectId(id) });
  console.log('🚀 ~ file: tasksModel.js ~ line 22 ~ deleteTaskModel ~ teste', teste);
};

module.exports = {
  insertTaskModel,
  updateTaskModel,
  deleteTaskModel,
};
