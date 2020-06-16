import React from 'react';
import PropTypes from 'prop-types';
import styles from './friendList.module.css';
import FriendListItem from '../friendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      <FriendListItem friends={friends} />
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
