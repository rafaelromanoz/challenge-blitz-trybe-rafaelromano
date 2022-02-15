import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  editModal: false,
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTasks: (state, action) => {
      state.tasks.push(action.payload);
    },
    editModalSwitch: (state) => state.editModal,
  },
});

const { addTasks, editModal } = taskSlice.actions;

export { addTasks, editModal };

export default taskSlice.reducer;
