import moment from 'moment';
import { setIdForEdit, editTask } from '../features/task/taskSlice';
import { openModal, closeModal } from '../features/task/modalSlice';

function editTaskClick(index, id, dispatch) {
  dispatch(setIdForEdit({ index, id }));
  dispatch(openModal());
}

function saveTaskEdit(indexTask, id, task, status, dispatch) {
  const toEdit = {
    task,
    status,
    date: moment().format('L'),
    indexTask,
    id,
  };
  dispatch(editTask(toEdit));
  dispatch(closeModal());
}

export { editTaskClick, saveTaskEdit };
