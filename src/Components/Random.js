import React, {useState, useEffect, useRef} from 'react';
import styles from '../css/Random.module.css'


const Random = (props) => {
    const [state, setState] = useState(null);

    const numRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + 1);
    };
    
    const setRandomState = () => {
        setState(numRandom(1, 3));
    };
    
    return (
        <div className={styles.random_nav}>  
            <div className={styles.nav}>
                <span className={styles.state}>혼잡도: </span>{(() => {
                    switch(state) {
                        case 1:
                            return <span style={{color: "green"}}>여유</span>
                        case 2:
                            return <span style={{color: "blue"}}>보통</span>
                        case 3:
                            return <span style={{color: "red"}}>혼잡</span>
                        default:
                            return <span>버튼을 클릭하세요.</span>
                    }
                })()}
            <span className={styles.btn_nav}>
                {/* 눌러서 새로고침해서 뜨게 하는 방법(계속 바뀌는 식) */}
                <button className={styles.btn} onClick={setRandomState}>새로고침</button>
            </span>
            </div>
        </div>
    )
    };

export default Random;