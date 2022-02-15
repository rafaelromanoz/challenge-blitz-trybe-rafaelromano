import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  editModal: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => ({
      ...state,
      editModal: !state.editModal,
    }),
    closeModal: (state) => ({
      ...state,
      editModal: !state.editModal,
    }),
  },
});

const { openModal, closeModal } = modalSlice.actions;

export { openModal, closeModal };

export default modalSlice.reducer;
