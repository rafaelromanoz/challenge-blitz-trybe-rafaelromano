import { deleteTask } from '../features/task/taskSlice';
import api from '../api/apiConfig';

async function deleteTaskClick(id, dispatch) {
  await api.delete('/tasks', { data: { id } });
  dispatch(deleteTask(id));
}

export default deleteTaskClick;
