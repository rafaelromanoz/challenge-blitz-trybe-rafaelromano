import React, { useState } from 'react';
import {
  Button,
  Form,
  FormControl,
  InputGroup,
  Modal,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../features/task/modalSlice';
import { saveTaskEdit } from '../functions/editTask';

function ModalEditCard() {
  const [task, setTask] = useState('');
  const [status, setStatus] = useState('');
  const isModalOpen = useSelector(({ modal }) => modal.editModal);
  const { index, id } = useSelector((data) => data.task.idAndIndexTaskForEdit);
  const dispatch = useDispatch();
  return (
    <Modal show={isModalOpen} animation onHide={() => dispatch(closeModal())}>
      <Modal.Header closeButton>
        <Modal.Title>Editar tarefa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup>
          <InputGroup.Text id="basic-addon">Digite uma task</InputGroup.Text>
          <FormControl
            style={{ width: '150px' }}
            onChange={({ target }) => setTask(target.value)}
          />
          <Form.Select onChange={({ target }) => setStatus(target.value)}>
            <option>Escolha um status</option>
            <option value="Pendente">Pendente</option>
            <option value="Andamento">Andamento</option>
            <option value="Pronto">Pronto</option>
          </Form.Select>
        </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => dispatch(closeModal())}>
          Close
        </Button>
        <Button variant="primary" onClick={() => saveTaskEdit(index, id, task, status, dispatch)}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEditCard;
