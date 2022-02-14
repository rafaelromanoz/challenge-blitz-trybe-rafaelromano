import moment from 'moment';
import api from '../api/axiosConfig';

function validateInputAndSelect(task, select) {
  if (task === '') return true;
  if (select === '') return true;
  return false;
}

async function manipuleAndSendTaskToDb(task, status) {
  const taskToDb = {
    task,
    date: moment().format('L'),
    status,
  };
  const {
    data: { id },
  } = await api.post('/tasks', taskToDb);
  return { id, taskToDb };
}

function manipuleAndCreateListOfTasks(id, taskToDb, setListTasks) {
  const taskToState = {
    ...taskToDb,
    id,
  };
  setListTasks((prevState) => [...prevState, taskToState]);
}

async function onClickAddTaskToStateAndDb(task, status, setListTasks) {
  const { id, taskToDb } = await manipuleAndSendTaskToDb(task, status);
  manipuleAndCreateListOfTasks(id, taskToDb, setListTasks);
}

export {
  manipuleAndCreateListOfTasks,
  manipuleAndSendTaskToDb,
  validateInputAndSelect,
  onClickAddTaskToStateAndDb,
};
