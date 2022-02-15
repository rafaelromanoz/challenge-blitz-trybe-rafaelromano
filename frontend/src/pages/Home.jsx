import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Container,
  Header,
  Input,
  InputsContainer,
  Options,
  Select,
} from './HomeStyles';
import { onClickAddTaskToStateAndDb } from '../functions/addTask';
import validateInputAndSelect from '../functions/validates';

import CardsTasks from '../components/CardsTasks';
import EditCardModal from '../components/EditCardModal';

export default function Home() {
  const [task, setTask] = useState('');
  const [status, setStatus] = useState('');
  const allTasks = useSelector(({ task: tasksFromGlobal }) => tasksFromGlobal.tasks);
  const dispatch = useDispatch();
  return (
    <Container>
      <Header>Digite uma task</Header>
      <InputsContainer>
        <Input onChange={({ target }) => setTask(target.value)} />
        <Select onChange={({ target }) => setStatus(target.value)}>
          <Options>Escolha um status</Options>
          <Options value="Pendente">Pendente</Options>
          <Options value="Andamento">Andamento</Options>
          <Options value="Pronto">Pronto</Options>
        </Select>
      </InputsContainer>
      <Button
        disabled={validateInputAndSelect(task, status)}
        onClick={() => onClickAddTaskToStateAndDb(task, status, dispatch)}
      >
        Salvar tarefa
      </Button>
      <EditCardModal />
      <CardsTasks tasks={allTasks} />
    </Container>
  );
}
