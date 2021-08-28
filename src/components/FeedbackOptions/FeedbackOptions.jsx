import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './FeedbackOptions.styles';

const FeedbackOptions = ({ item }) => {
  return (
    <button>
      {item}
      {/* {Object.keys(state).map((item, i) => (
        // <button key={i}>{item} </button>
        <FeedbackOptions key={i} item={item} />
      ))} */}
    </button>
  );
};

FeedbackOptions.propTypes = {
  item: PropTypes.string,
};

export default FeedbackOptions;
