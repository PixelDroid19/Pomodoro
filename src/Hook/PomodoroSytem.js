import  { useState, useEffect } from "react";

const PomodoroSytem = () => {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [displayMessage, setDisplayMessage] = useState(false);
    
    useEffect(() =>{
        Time()
    }, [seconds])   

    const Time = () =>{
        let interval = setInterval(()=>{
            clearInterval(interval);
            if(seconds === 0){
                if(minutes !== 0){
                    setSeconds(59);
                    setMinutes(minutes - 1)
                }else{
                    let minutesMessager = displayMessage ? 24 : 4;
                    let secondsMessager = 59;

                    setSeconds(secondsMessager);
                    setMinutes(minutesMessager);
                    setDisplayMessage(!displayMessage);
                }
            }else{
                setSeconds(seconds - 1);
            }

        }, 1000)
    }
    
    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return [timerMinutes, timerSeconds, displayMessage]
}

export default PomodoroSytem
