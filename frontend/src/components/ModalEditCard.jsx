import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../features/task/modalSlice';

function ModalEditCard() {
  const isModalOpen = useSelector(({ modal }) => modal.editModal);
  const dispatch = useDispatch();
  return (
    <Modal show={isModalOpen} animation onHide={() => dispatch(closeModal())}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => dispatch(closeModal())}>
          Close
        </Button>
        <Button variant="primary" onClick={() => dispatch(closeModal())}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEditCard;
