import { useState, useEffect } from 'react';
import { formatTime } from '@utils/utils';

const UseTimer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        let timer: number;
        if (isRunning) {
            timer = window.setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
        }

        return () => {
            clearInterval(timer);
        };
    }, [isRunning]);

    const formattedTime = formatTime(seconds);

    return { formattedTime, setIsRunning };
};

export default UseTimer;
