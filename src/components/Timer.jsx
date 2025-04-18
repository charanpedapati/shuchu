import React, { useState, useEffect, useRef } from 'react';

const INITIAL_TIME = 1500; // 25 minutes

export default function Timer() {
    const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
    const [isRunning, setIsRunning] = useState(false);
    const intervalIdRef = useRef(null);

    const formatTime = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const startTimer = () => {
        if (intervalIdRef.current !== null) return;

        intervalIdRef.current = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(intervalIdRef.current);
                    intervalIdRef.current = null;
                    setIsRunning(false);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);
    };

    const stopTimer = () => {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
        setIsRunning(false);
    };

    const resetTimer = () => {
        stopTimer();
        setTimeLeft(INITIAL_TIME);
    };

    const toggleTimer = () => {
        if (isRunning) {
            stopTimer();
        } else {
            setIsRunning(true);
        }
    };

    useEffect(() => {
        if (isRunning) {
            startTimer();
        }

        return () => {
            // Clean up when component unmounts or isRunning changes
            clearInterval(intervalIdRef.current);
            intervalIdRef.current = null;
        };
    }, [isRunning]);

    return (
        <div className="timer-container">
            <h1 className="timer-display">{formatTime(timeLeft)}</h1>
            <button
                className={`button ${isRunning ? 'red' : 'green'}`}
                onClick={toggleTimer}
                disabled={timeLeft === 0}

            >
                {isRunning ? "⏸️ Break Please" : "▶️ Start Studying"}
            </button>
            <button className="button yellow" onClick={resetTimer}>
            ⟳ Reset
            </button>

        </div>
    );
}
