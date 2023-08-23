import React, {useState, useEffect, useRef} from 'react';
import styles from '../css/Random.module.css'

const Random = (props) => {
    const [num, setNum] = useState(0);
    const [state, setState] = useState('버튼을 눌러주세요');

    const numRandom = (min, max) => {
        let randN = Math.floor(Math.random()*(max-min+1));
        return randN;
    };
    
    const setRandom = () => {
        const randomNum = numRandom(1,4);
        setNum(randomNum);
        if (randomNum === 1) {setState('여유')} else if (randomNum === 2) {setState('보통')} else if (randomNum === 3) {setState('혼잡')};
    };
    
    return (
        <div className={styles.random_nav}>  
            <div className={styles.nav}>
                <span className={styles.state}>혼잡도: </span>
                <span>{state}</span>
            <span className={styles.btn_nav}>
                {/* 눌러서 새로고침해서 뜨게 하는 방법(계속 바뀌는 식) */}
                <button className={styles.btn} onClick={setRandom}>새로고침</button>
            </span>
            </div>
        </div>
    )
    };

export default Random;