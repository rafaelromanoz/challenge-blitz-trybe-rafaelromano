import moment from 'moment';
import { setIdForEdit, editTask } from '../features/task/taskSlice';
import { openModal, closeModal } from '../features/task/modalSlice';
import api from '../api/apiConfig';

function editTaskClick(index, id, dispatch) {
  dispatch(setIdForEdit({ index, id }));
  dispatch(openModal());
}

async function saveTaskEdit(indexTask, id, task, status, dispatch) {
  const toEdit = {
    task,
    status,
    date: moment().format('L'),
    indexTask,
    id,
  };
  dispatch(editTask(toEdit));
  await api.put('/tasks', toEdit);
  dispatch(closeModal());
}

export { editTaskClick, saveTaskEdit };
