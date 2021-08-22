import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './FeedbackOptions.styles';

class FeedbackOptions extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }
 
  render () {

    return (
      <div className="FeedbackOptionsWrapper">
FeedbackOptions      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  // bla: PropTypes.string,
};

FeedbackOptions.defaultProps = {
  // bla: 'test',
};

export default FeedbackOptions;
