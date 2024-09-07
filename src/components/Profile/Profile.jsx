import styles from './Profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({ name, tag, location, image, stats }) => {
  const statsData = Object.entries(stats);

  return (
    <div className={styles.profile}>
      <div className={styles.personalInfo}>
        <img src={image} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
        {statsData.map(([label, value]) => (
          <li key={`${label}-${value}`}>
            <span className={styles.label}>{label}</span>
            <span className={styles.value}>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
