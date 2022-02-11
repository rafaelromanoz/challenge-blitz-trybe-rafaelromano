import React, { useState } from 'react';
import moment from 'moment';
import {
  Button,
  Container,
  Header,
  Input,
  InputsContainer,
  Options,
  Select,
} from './TasksStyles';
import api from '../api/axiosConfig';
import validateInputAndSelect from '../functions';

export default function Tasks() {
  const [task, setTask] = useState('');
  const [status, setStatus] = useState('');
  function manipuleAndSendTaskToDb() {
    const taskToDb = {
      task,
      date: moment().toDate().toString(),
      status,
    };
    console.log(taskToDb);
    api.post('/tasks', taskToDb);
  }
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
        onClick={() => manipuleAndSendTaskToDb()}
      >
        Salvar tarefa
      </Button>
    </Container>
  );
}
