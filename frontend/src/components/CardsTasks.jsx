import PropTypes from 'prop-types';
import React from 'react';
// import CardContainer from './CardsTasksStyles';

export default function CardsTasks({ tasks }) {
  return (
    <div>
      {tasks && tasks.map(({
        task, date, status, id,
      }) => (
        <div key={id}>
          <p>{task}</p>
          <p>{date}</p>
          <p>{status}</p>
          <button type="button">Deletar</button>
          <button type="button">Editar</button>
        </div>
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