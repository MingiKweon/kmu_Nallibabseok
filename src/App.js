import styles from "./App.module.css";
import menustyle from './MenuBox2.module.css';
import MenuBox2 from './MenuBox2';
import Banner from './Banner';
import Calculator from './Calculator';
import Navigation from './Navigation';

function App() {

  return (
    <div className={styles.App}>

        <div className = {styles.Nav}>
          <Navigation/>
        </div>

      <div className={styles.Ban}>
        <Banner/>
      </div>
      <div className = {styles.mbox}>

        <div className = {styles.item}>
          <MenuBox2 className = {menustyle.MenuBox2}/>
        </div> 
        <div className = {styles.cal}>
          <Calculator/>
        </div>

      </div>

      
      
    </div>
  )
};

export default App;
