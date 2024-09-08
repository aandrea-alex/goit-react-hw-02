import styles from './Options.module.css';
import OptionButton from './OptionButton';

const Options = ({ onCounts, onReset, isResetBtn = false}) => {
  return (
    <div className={styles.options}>
      <OptionButton onClick={() => onCounts('good')}>Good</OptionButton>
      <OptionButton onClick={() => onCounts('neutral')}>Neutral</OptionButton>
      <OptionButton onClick={() => onCounts('bad')}>Bad</OptionButton>
      {isResetBtn ? <OptionButton onClick={onReset}>Reset</OptionButton> : null}
    </div>
  );
};

export default Options;
