import styles from '../css/Time.module.css';
import React, {useState, useEffect} from 'react';

const formatTime = (time) => {
    let month = time.getMonth();
    let date = time.getDate();
    let hour;
    let meri;

    if (Math.floor(time.getHours() / 12) === 0) {
        hour = time.getHours()
        meri = '오전'
    } else if (Math.floor(time.getHours() / 12) === 1) {
        if (time.getHours() === 12) {
            hour = 12
        } else {
            hour = time.getHours() - 12
        };
        meri = '오후'
    };
    
    let minutes = (time.getMinutes() < 10) ? '0'+ time.getMinutes() : time.getMinutes();

    const week = ['일','월','화','수','목','금','토'];
    let day_week = week[time.getDay()];

    return (
        month + '. ' + date + ' ' + '(' + day_week + ')' + ' ' + meri +  ' ' + hour + ' : ' + minutes
        );
    }

const Time = () => {
    const [time, setTime] = useState(new Date())

    setInterval(() => {
        setTime(new Date())
    }, 1000)
    
    return (
            <div className={styles.timer}>
                {formatTime(time)}
            </div>
        )
    };

export default Time;