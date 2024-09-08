import { useState, useEffect } from 'react';
import Description from './Description/Description';
import Options from './Options/Options';
import {
  FEEDBACK_INVITATION,
  CAFE_TITLE,
  INIT_COUNTS,
} from './Utils/Constants';
import { saveToLocalStorage, getInitial } from './Utils/Local-storage';
import { getStatistics } from './Utils/Feedback-statistics';
import styles from './App.module.css';

function App() {
  const [counts, setCounts] = useState(getInitial);

  const handleCounts = type => {
    setCounts(prevCounts => ({
      ...prevCounts,
      [type]: prevCounts[type] + 1,
    }));
  };

  const handleReset = () => {
    setCounts(INIT_COUNTS);
  };

  useEffect(() => {
    saveToLocalStorage(counts);
  }, [counts]);

  const statistics = getStatistics(counts);
  console.log("statistics:", statistics);

  return (
    <div className={styles.container}>
      <Description invitation={FEEDBACK_INVITATION}>{CAFE_TITLE}</Description>
      <Options
        onCounts={handleCounts}
        onReset={handleReset}
        isResetBtn={statistics.total > 0}
      />
    </div>
  );
}

export default App;
