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
    setIdForEdit: (state, action) => {
      state.idAndIndexTaskForEdit = action.payload;
    },
  },
});

const { addTasks, editTask, setIdForEdit } = taskSlice.actions;

export { addTasks, editTask, setIdForEdit };

export default taskSlice.reducer;
