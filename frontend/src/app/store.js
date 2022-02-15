import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/task/taskSlice';
import modalSlice from '../features/task/modalSlice';

const store = configureStore({
  reducer: {
    task: taskReducer,
    modal: modalSlice,
  },
});

export default store;
