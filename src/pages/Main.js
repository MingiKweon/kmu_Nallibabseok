import styles from '../css/Main.module.css';
import { NavLink } from 'react-router-dom';


function Main() {
    return (
        <div className={styles.title}>
            <h1>여기가 메인화면입니다.</h1>
            <p className={styles.mtitle}>
                <button className={styles.button} id={styles.button1}><NavLink className={styles.link} to='/'>학식</NavLink></button>
                <button className={styles.button} id={styles.button2}><NavLink className={styles.link} to='/'>법식</NavLink></button>
                <button className={styles.button} id={styles.button3}><NavLink className={styles.link} to='/forprofessor'>교직원식</NavLink></button>
            </p>
        </div>
    );
};

export default Main;