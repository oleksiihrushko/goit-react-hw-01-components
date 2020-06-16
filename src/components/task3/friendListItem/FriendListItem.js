import React from 'react';
import PropTypes from 'prop-types';
import styles from '../friendList/friendList.module.css';

const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map(friend => (
        <li key={friend.id} className={styles.item}>
          <span
            className={
              friend.isOnline ? styles.statusOnline : styles.statusOffline
            }
          ></span>

          <img
            className={styles.avatar}
            src={friend.avatar}
            alt="friendAvatar"
            width="48"
          />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
