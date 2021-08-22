import React  from 'react';
import PropTypes from 'prop-types';
import FriendsItem from '../FriendListItem/FriendsItem';
import  './FriendList.css';

// {
//     "avatar": "https://www.flaticon.com/svg/static/icons/svg/763/763704.svg",
//     "name": "Mango",
//     "isOnline": true,
//     "id": 1812
//   },

const  FriendList =({friends})=> { 
      return (
           <ul className="friend-list">
            {friends.map(({ avatar, name, isOnline, id }) => <FriendsItem avatar={avatar} name={name} isOnline={isOnline} key={id}/>)}
          </ul>
     );
  }
 
FriendList.propTypes = {
  friends: PropTypes.any.isRequired
}

FriendList.defaultProps = {
  // bla: 'test',
};

export default FriendList;
