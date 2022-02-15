import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTasks: (state, action) => {
      state.tasks.push(action.payload);
    },
  },
});

const { addTasks, openModal, closeModal } = taskSlice.actions;

export { addTasks, openModal, closeModal };

export default taskSlice.reducer;
