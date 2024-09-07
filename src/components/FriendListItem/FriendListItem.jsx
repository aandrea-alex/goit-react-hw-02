import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const getStatusClass = isOnline =>
  clsx(styles.status, {
    [styles.online]: isOnline,
    [styles.offline]: !isOnline,
  });

const Friend = ({ avatar, name, isOnline }) => {
  return (
    <div className={styles.item}>
      <img className={styles.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={styles.name}>{name}</p>
      <p className={getStatusClass(isOnline)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Friend;
