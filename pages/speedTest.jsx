import React, { useState, useEffect } from 'react';
import { speedTestPassage } from '../data/speedTestPassage';

const SpeedTest = () => {
  const [timer, setTimer] = useState(0);
  const [isTiming, setIsTiming] = useState(false);
  const [speed, setSpeed] = useState(0);

  const addToTimer = () => {
    setTimer((prev) => Math.round((prev + 0.1) * 100) / 100);
  };

  const stopTimer = () => {
    setIsTiming(false);
    setSpeed(Math.round((204 / timer) * 60));
  };

  useEffect(() => {
    if (isTiming) {
      const intervalId = setInterval(() => {
        addToTimer();
      }, 100);
      return () => clearInterval(intervalId);
    }
  }, [isTiming]);

  return (
    <div className='container mx-auto flex flex-col gap-4'>
      <h1>Reading speed test</h1>
      <span className='font-mono'>{timer} seconds</span>
      <span className='font-mono'>{speed} words per minute</span>
      <h2>Read this passage</h2>
      <button
        className={`${isTiming ? 'hidden' : 'block'} bg-green-400`}
        onClick={() => setIsTiming(true)}
      >
        Start
      </button>
      <button
        className={`${isTiming ? 'block' : 'hidden'} bg-red-400`}
        onClick={stopTimer}
      >
        Stop
      </button>
      <p>{speedTestPassage}</p>
    </div>
  );
};

export default SpeedTest;
