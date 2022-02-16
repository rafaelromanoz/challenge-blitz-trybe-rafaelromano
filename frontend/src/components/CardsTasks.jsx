import PropTypes from 'prop-types';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { editTaskClick } from '../functions/editTask';

export default function CardsTasks({ tasks }) {
  const dispatch = useDispatch();
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
              <Button variant="danger">
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
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
