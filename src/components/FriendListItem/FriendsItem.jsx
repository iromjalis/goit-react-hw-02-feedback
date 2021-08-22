import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import  './FriendsItem.css';
import defaultImg from '../../defaultPhoto.jpg'

const FriendsItem =({name, avatar,isOnline, id}) =>{ 
 
 
    return (
       <li className="FriendsItem-item" key={id}>
        <span className="status">{isOnline? '🟢': '🔴' } </span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name} </p>
      </li>

     );
  }

FriendsItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar:PropTypes.string,
  isOnline:PropTypes.bool.isRequired,
};

FriendsItem.defaultProps = {
  avatar: defaultImg,
};

export default FriendsItem;
