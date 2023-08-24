import styles from '../css/Time.module.css';
import React, {useState, useEffect} from 'react';


const Time = () => {
    let now = new Date();
    let month = now.getMonth();
    let date = now.getDate();
    let hour;
    let meri;

    if (Math.floor(now.getHours() / 12) === 0) {
        hour = now.getHours()
        meri = '오전'
    } else if (Math.floor(now.getHours() / 12) === 1) {
        if (now.getHours() === 12) {
            hour = 12
        } else {
            hour = now.getHours() - 12
        };
        meri = '오후'
    };
    
    let minutes = (now.getMinutes() < 10) ? '0'+ now.getMinutes() : now.getMinutes();

    const week = ['일','월','화','수','목','금','토'];
    let day_week = week[now.getDay()];

    let t = setTimeout(function(){Time()}, 1000);

    return (
        month + '. ' + date + ' ' + '(' + day_week + ')' + ' ' + meri +  ' ' + hour + ' : ' + minutes
        );
        
    };
    
function NowTime() {
    return (
        <div className={styles.timer}>
            <Time />
        </div>
    )
}

export default NowTime;