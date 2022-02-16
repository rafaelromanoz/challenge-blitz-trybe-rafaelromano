import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonGroup } from 'react-bootstrap';
import sortTasksByStatus from '../functions/radiosSorts';

export default function RadioSortsTasks() {
  const tasks = useSelector(({ task }) => task.tasks);
  const dispatch = useDispatch();
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <br />
      <h3>Ordernar por:</h3>
      <br />
      <ButtonGroup className="mb-2">
        <Button onClick={() => sortTasksByStatus('asc', dispatch, tasks)}>
          Ordem alfabética
        </Button>
        <Button onClick={() => sortTasksByStatus('data', dispatch, tasks)}>
          Data
        </Button>
        <Button onClick={() => sortTasksByStatus('status', dispatch, tasks)}>
          Status
        </Button>
      </ButtonGroup>
      <br />
    </div>
  );
}
