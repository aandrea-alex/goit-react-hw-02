import styles from './Feedback.module.css';

const Feedback = ({ reviews, statistics: { total, positive } }) => {
  return (
    <div>   
      <ul className={styles.list}>
        {Object.entries(reviews).map(([type, value]) => (
          <li className={styles.item} key={type}>
            {type}: {value}
          </li>
        ))}
      </ul>
      <p className={styles.total}>Total: {total}</p>
      <p className={styles.positive}>Positive: {positive} %</p>
    </div>
  );
};

export default Feedback;
