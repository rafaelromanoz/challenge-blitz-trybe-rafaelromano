import PropTypes from 'prop-types';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { openModal } from '../features/task/modalSlice';

export default function CardsTasks({ tasks }) {
  const dispatch = useDispatch();
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {tasks &&
        tasks.map(({ task, date, status, id }) => (
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
                onClick={() => dispatch(openModal())}
              >
                <AiOutlineDelete />
              </Button>
              <Button variant="danger">
                <AiOutlineEdit />
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
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
