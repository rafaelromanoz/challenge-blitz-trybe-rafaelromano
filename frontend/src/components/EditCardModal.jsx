import React from 'react';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../features/task/modalSlice';

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export default function EditCardModal() {
  const dispatch = useDispatch();
  const modalOpen = useSelector(({ modal }) => modal.editModal);
  Modal.setAppElement('#root');
  return (
    <div>
      <Modal
        isOpen={modalOpen}
        contentLabel="Editar tarefa"
      >
        <button type="button" onClick={() => dispatch(closeModal())}>Fechar</button>
        <div>I am a modal</div>
        <form>
          <p>blab</p>
        </form>
        <button type="button">
          Salvar
        </button>
      </Modal>
    </div>
  );
}
