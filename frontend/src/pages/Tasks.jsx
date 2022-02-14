import React, { useState } from 'react';
import {
  Button,
  Container,
  Header,
  Input,
  InputsContainer,
  Options,
  Select,
} from './TasksStyles';
import {
  onClickAddTaskToStateAndDb,
  validateInputAndSelect,
} from '../functions';

import CardsTasks from '../components/CardsTasks';

export default function Tasks() {
  const [task, setTask] = useState('');
  const [status, setStatus] = useState('');
  const [listTasks, setListTasks] = useState([]);
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
        onClick={() => onClickAddTaskToStateAndDb(task, status, setListTasks)}
      >
        Salvar tarefa
      </Button>
      <CardsTasks tasks={listTasks} />
    </Container>
  );
}
