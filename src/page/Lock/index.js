import clsx from 'clsx';
import style from './Lock.module.scss';
import { useEffect, useRef, useState } from 'react';

function Lock() {
    const [currentTime, setCurrentTime] = useState(new Date());
    const elementSecond = useRef();
    const elementMinute = useRef();

    useEffect(() => {
        const timeid = setInterval(() => {
            setCurrentTime(new Date());
        },1000);
        return () => {clearInterval(timeid)};
    },[]);

    const hour = String(currentTime.getHours()).padStart(2, '0');
    const minute = String(currentTime.getMinutes()).padStart(2, '0');
    const second = String(currentTime.getSeconds()).padStart(2, '0');

    
    return (  
        <div className={clsx(style['wrapper'])}>
            <div className={clsx(style['content'])}>
                <div className={clsx(style['content-hour'])}>
                    {hour}
                </div>
                <div className={clsx(style['separator'])}>
                :
                </div>
                <div className={clsx(style['content-minute'])}
                    ref={elementMinute}
                >
                    {minute}
                </div>
                <div className={clsx(style['separator'])}>
                :
                </div>
                <div className={clsx(style['content-second'])}
                    ref={elementSecond}
                >
                    {second}
                </div>
            </div>
        </div>
    );
}

export default Lock;