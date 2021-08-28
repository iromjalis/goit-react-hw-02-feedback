import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Notification.styles';

const Notification = ({ message }) => {
  return (
    <div className="NotificationWrapper">
      <h1>{message}</h1>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};

Notification.defaultProps = {
  message: '',
};

export default Notification;
