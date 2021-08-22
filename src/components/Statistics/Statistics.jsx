import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Statistics.styles';

class Statistics extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
 
  render () {
     return (
      <div className="StatisticsWrapper">
Statistics      </div>
    );
  }
}

Statistics.propTypes = {
  // bla: PropTypes.string,
};

Statistics.defaultProps = {
  // bla: 'test',
};

export default Statistics;
