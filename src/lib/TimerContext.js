import React from 'react';

const TimerContext = React.createContext({
    isPlaying: false,
    startTime: 0,
    baseTime: 0,
    splits: [],
    start: () => {},
    pause: () => {},
    stop: () => {},
    reset: () => {},
    setBaseTime: () => {},
    split: () => {}
});

export default TimerContext;