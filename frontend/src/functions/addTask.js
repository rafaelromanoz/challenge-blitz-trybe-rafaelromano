import moment from 'moment';
import { addTasks } from '../features/task/taskSlice';
import api from '../api/apiConfig';

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

async function onClickAddTaskToStateAndDb(task, status, dispatch, refInput) {
  const { id, taskToDb } = await manipuleAndSendTaskToDb(task, status);
  const tasks = {
    ...taskToDb,
    id,
  };
  dispatch(addTasks(tasks));
  refInput.current.value = '';
}

export {
  manipuleAndSendTaskToDb,
  onClickAddTaskToStateAndDb,
};
