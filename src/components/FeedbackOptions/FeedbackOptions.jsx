import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './FeedbackOptions.styles';

const  FeedbackOptions =({item})=> { 
 
    return (
      <button >{item} </button>
    );
  }

FeedbackOptions.propTypes = {
 item:PropTypes.string.isRequired,
};

 

export default FeedbackOptions;
