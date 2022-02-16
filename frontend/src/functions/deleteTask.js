import { deleteTask } from '../features/task/taskSlice';

function deleteTaskClick(index, dispatch) {
  dispatch(deleteTask(index));
}

export default deleteTaskClick;
