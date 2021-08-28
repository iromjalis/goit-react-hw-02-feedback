import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Statistics.styles';

const Statistics = () => {
  return (
    <div className="StatisticsWrapper">
      Statistics
      {/* <ul>
        {Object.entries(this.state).map((item, i) => (
          <li key={i}>
            {item[0]}: {item[1]}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

Statistics.propTypes = {
  // bla: PropTypes.string,
};

Statistics.defaultProps = {
  // bla: 'test',
};

export default Statistics;
