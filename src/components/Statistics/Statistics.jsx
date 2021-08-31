import React from 'react';
import PropTypes from 'prop-types';
// import s from './Statistics.css';

const Statistics = ({ options, total, positivePercentage }) => {
  return (
    <div className="StatisticsWrapper">
      Statistics
      <ul>
        {Object.entries(options).map((item, i) => (
          <li key={i}>
            {item[0]}: {item[1]}
          </li>
        ))}
      </ul>
      <p>
        Total: <b>{total}</b>
      </p>
      <p>
        Positive feedback: <b>{positivePercentage}</b>%
      </p>
    </div>
  );
};

Statistics.propTypes = {
options:PropTypes.objectOf(PropTypes.number.isRequired), 
total:PropTypes.number.isRequired,
positivePercentage:PropTypes.number.isRequired,};

Statistics.defaultProps = {
  // bla: 'test',
};

export default Statistics;
