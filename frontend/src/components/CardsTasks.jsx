import PropTypes from 'prop-types';
import React, {
  useEffect,
} from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { getTasksOnLoad } from '../features/task/taskSlice';
import { editTaskClick } from '../functions/editTask';
import deleteTaskClick from '../functions/deleteTask';
import api from '../api/apiConfig';

export default function CardsTasks({ tasks }) {
  const dispatch = useDispatch();
  useEffect(async () => {
    const { data } = await api.get('/tasks');
    dispatch(getTasksOnLoad(data));
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
      }}
    >
      {tasks
        && tasks.map(({
          task, date, status, id,
        }, index) => (
          <Card
            key={id}
            style={{
              width: '50%',
              display: 'flex',
              flexFlow: 'nowrap',
              alignItems: 'center',
            }}
          >
            <Card.Body>
              <Card.Title>{task}</Card.Title>
              <Card.Subtitle>{date}</Card.Subtitle>
              <p>{status}</p>
              <Button
                variant="warning"
                onClick={() => editTaskClick(index, id, dispatch)}
              >
                <AiOutlineEdit />
              </Button>
              <Button
                variant="danger"
                onClick={() => deleteTaskClick(id, dispatch)}
              >
                <AiOutlineDelete />
              </Button>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
}

CardsTasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      task: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      id: PropTypes.string,
    }),
  ).isRequired,
};
