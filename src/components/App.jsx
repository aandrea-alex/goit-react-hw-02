import Description from './Description/Description';
import { FEEDBACK_INVITATION, CAFE_TITLE } from './Utils/Constants';
import styles from './App.module.css';
function App() {
  return (
    <div className={styles.container}>
      <Description invitation={FEEDBACK_INVITATION}>{CAFE_TITLE}</Description>
     
    </div>
  );
}

export default App;
