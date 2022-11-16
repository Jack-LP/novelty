import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../context/UserContext';
import BackgroundImage from '../components/common/BackgroundImage';
import { speedTestPassage } from '../data/speedTestPassage';
import { HourglassSplit, Fonts } from 'react-bootstrap-icons';

const SpeedTest = () => {
  const [testDisplay, setTestDisplay] = useState(null);
  const [timer, setTimer] = useState(0);
  const [isTiming, setIsTiming] = useState(false);
  const [hasTimed, setHasTimed] = useState(false);
  const [showPassage, setShowPassage] = useState(false);

  const { readingSpeed, setReadingSpeed } = useContext(UserContext);

  const addToTimer = () => {
    setTimer((prev) => Math.round((prev + 0.1) * 100) / 100);
  };

  const startTimer = () => {
    hasTimed ? setTimer(0) : null;
    setHasTimed(true);
    setIsTiming(true);
    setShowPassage(true);
  };

  const stopTimer = () => {
    setIsTiming(false);
    setReadingSpeed(Math.round((204 / timer) * 60));
  };

  useEffect(() => {
    if (isTiming) {
      const intervalId = setInterval(() => {
        addToTimer();
      }, 100);
      return () => clearInterval(intervalId);
    }
  }, [isTiming]);

  useEffect(() => {
    setTestDisplay(
      <div className='pt-28'>
        <BackgroundImage image='img/user-bg.jpg' />
        <div className='container mx-auto flex flex-col gap-4'>
          <div className='flex flex-col items-start gap-4 bg-charcoal/25 backdrop-blur-lg p-10 rounded-lg text-white'>
            <h1 className='font-playfair text-6xl font-bold'>
              Reading speed test
            </h1>
            <div className='flex gap-4 font-inter'>
              <div className='flex gap-2 items-center'>
                <HourglassSplit size={18} />
                <span>{timer}s</span>
              </div>
              <div className='flex gap-2 items-center'>
                <Fonts size={18} />
                <span>{readingSpeed} wpm</span>
              </div>
            </div>
            <p className='font-lora'>
              Click the button below to begin the test. Read the passage that
              appears at your regular reading pace, ensuring full comprehension.
              Once you’ve finished reading the passage, press the stop button to
              view your results.
            </p>
            <button
              className={`${
                isTiming ? 'hidden' : 'block'
              } bg-charcoal py-1.5 px-4 font-inter font-light rounded-lg`}
              onClick={startTimer}
            >
              Start
            </button>
            <button
              className={`${
                isTiming ? 'block' : 'hidden'
              } bg-charcoal py-1.5 px-4 font-inter font-light rounded-lg`}
              onClick={stopTimer}
            >
              Stop
            </button>
            <p
              className={`${
                showPassage ? 'block' : 'hidden'
              } font-lora text-lg leading-7`}
            >
              {speedTestPassage}
            </p>
          </div>
        </div>
      </div>
    );
  }, [isTiming, readingSpeed, startTimer, stopTimer, timer, showPassage]);

  return <>{testDisplay}</>;
};

export default SpeedTest;
