import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  InputGroup, Form, Button,
  FormControl,
} from 'react-bootstrap';
import { onClickAddTaskToStateAndDb } from '../functions/addTask';
import validateInputAndSelect from '../functions/validates';

import CardsTasks from '../components/CardsTasks';
import EditCardModal from '../components/ModalEditCard';
import RadioSortsTasks from '../components/SortsTasks';

export default function Home() {
  const [task, setTask] = useState('');
  const [status, setStatus] = useState('');
  const allTasks = useSelector(({ task: tasksFromGlobal }) => tasksFromGlobal.tasks);
  const dispatch = useDispatch();
  const refInput = useRef();

  return (
    <div>
      <h1 style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
      }}
      >
        Blitz Tybe Challenge
      </h1>
      <InputGroup style={{ width: '60%', marginLeft: '275px' }}>
        <InputGroup.Text id="basic-addon">Digite uma task</InputGroup.Text>
        <FormControl
          style={{ width: '150px' }}
          onChange={({ target }) => setTask(target.value)}
          ref={refInput}
        />
        <Form.Select onChange={({ target }) => setStatus(target.value)}>
          <option>Escolha um status</option>
          <option value="Pendente">Pendente</option>
          <option value="Andamento">Andamento</option>
          <option value="Pronto">Pronto</option>
        </Form.Select>
        <Button
          style={{ width: '130px' }}
          disabled={validateInputAndSelect(task, status)}
          onClick={() => onClickAddTaskToStateAndDb(task, status, dispatch, refInput)}
        >
          Salvar tarefa
        </Button>
      </InputGroup>
      <EditCardModal />
      <RadioSortsTasks />
      <CardsTasks tasks={allTasks} />
    </div>
  );
}
