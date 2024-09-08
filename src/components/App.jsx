import { useState, useEffect } from 'react';
import Description from './Description/Description';
import Options from './Options/Options';
import { FEEDBACK_INVITATION, CAFE_TITLE, INIT_COUNTS} from './Utils/Constants';
import { saveToLocalStorage, getInitial} from './Utils/Local-storage';
import styles from './App.module.css';

function App() {
  const [reviews, setReviews] = useState(getInitial);

  const handleReview = type => {
    setReviews(prevReviews => ({
      ...prevReviews,
      [type]: prevReviews[type] + 1,
    }));
  };

  const handleReset = () => {
    setReviews(INIT_COUNTS);
  };

  useEffect(() => {
    saveToLocalStorage(reviews);
  }, [reviews]);

  return (
    <div className={styles.container}>
      <Description invitation={FEEDBACK_INVITATION}>{CAFE_TITLE}</Description>
      <Options
        onReview={handleReview}
        onReset={handleReset}
        // isResetBtn={statistics.total > 0}
      />
    </div>
  );
}

export default App;
