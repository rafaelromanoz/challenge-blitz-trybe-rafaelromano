import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  idAndIndexTaskForEdit: {},
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTasks: (state, action) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      const todo = action.payload;
      state.tasks[todo.indexTask] = todo;
    },
    deleteTask: (state, action) => {
      const listTasks = state.tasks.filter(({ id }) => id !== action.payload);
      state.tasks = listTasks;
    },
    orderTasksAction: (state, action) => {
      state.tasks = action.payload;
    },
    setIdForEdit: (state, action) => {
      state.idAndIndexTaskForEdit = action.payload;
    },
    getTasksOnLoad: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

const {
  addTasks,
  editTask,
  setIdForEdit,
  deleteTask,
  orderTasksAction,
  getTasksOnLoad,
} = taskSlice.actions;

export {
  addTasks,
  editTask,
  setIdForEdit,
  deleteTask,
  orderTasksAction,
  getTasksOnLoad,
};

export default taskSlice.reducer;
