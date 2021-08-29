import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.css';

const FeedbackOptionItem = ({ item, handleClick }) => {
  return (
    <>
      {
        <button onClick={handleClick} className="FeedbackOption_button">
          {item}
        </button>
      }
    </>
  );
};

FeedbackOptionItem.propTypes = {
  item: PropTypes.string,
};

export default FeedbackOptionItem;