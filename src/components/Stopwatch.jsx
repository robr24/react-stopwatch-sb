import React, { useEffect, useRef, useState } from 'react';

export default function Stopwatch() {
  const [millis, setMillis] = useState(0);
  const [mode, setMode] = useState('reset');
  const intervalRef = useRef(null);
  const TIME2 = 10;

  useEffect(() => {
    setMode(mode);
  }, [mode]);

  const count2 = () => {
    setMillis((prevState) => prevState + 1);
  };

  const play = () => {
    setMode('play');
    intervalRef.current = setInterval(count2, TIME2);
  };

  const pause = () => {
    setMode('pause');
    clearInterval(intervalRef.current);
  };

  const togglePlay = (event) => {
    event.preventDefault();
    debugger;
    if (mode === 'pause' || mode === 'reset') {
      play();
    } else {
      pause();
    }
  };

  const stop = (event) => {
    event.preventDefault();
    setMode('reset');
    clearInterval(intervalRef.current);
    setMillis(0);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <div className="stopwatch">
        <span className="hours">{Math.floor(millis / 360000)}:</span>
        <span className="minutes">{Math.floor(millis / 6000)}:</span>
        <span className="seconds">{Math.floor((millis / 100) % 60)}:</span>
        <span className="seconds">{Math.floor(millis % 100)}</span>
      </div>
      <form>
        <button onClick={togglePlay}>Play / Pause</button>
        <button onClick={stop}>Reset</button>
      </form>
    </div>
  );
}
