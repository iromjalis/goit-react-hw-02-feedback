import React from 'react';
import PropTypes from 'prop-types';
import FeedbackOptionItem from './FeedbackOptionItem';

const FeedbackOptions = ({ options, handleClick }) => {
  return (
    <>
      {Object.keys(options).map((item, i) => (
        <FeedbackOptionItem
          key={i}
          item={item}
          name={item}
          handleClick={handleClick}
        />
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  item: PropTypes.string,
};

export default FeedbackOptions;
