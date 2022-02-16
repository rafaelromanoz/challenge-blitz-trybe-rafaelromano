import { orderTasksAction } from '../features/task/taskSlice';

function sortTasksByStatus(orderBy, dispatch, tasks) {
  const tasksOrdered = [...tasks];
  switch (orderBy) {
    case 'asc':
      tasksOrdered.sort((a, b) => {
        const taskA = a.task.toUpperCase();
        const taskB = b.task.toUpperCase();
        let comparison = 0;
        if (taskA > taskB) {
          comparison = 1;
        }
        if (taskA < taskB) {
          comparison = -1;
        }
        return comparison;
      });
      dispatch(orderTasksAction(tasksOrdered));
      break;
    case 'date':
      tasksOrdered.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA - dateB;
      });
      dispatch(orderTasksAction(tasksOrdered));
      break;
    case 'status':
      tasksOrdered.sort((a, b) => {
        const taskA = a.status.toUpperCase();
        const taskB = b.status.toUpperCase();
        let comparison = 0;
        if (taskA > taskB) {
          comparison = 1;
        }
        if (taskA < taskB) {
          comparison = -1;
        }
        return comparison;
      });
      dispatch(orderTasksAction(tasksOrdered));
      break;
    default:
      dispatch(orderTasksAction(tasks));
      break;
  }
}

export default sortTasksByStatus;
