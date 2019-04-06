import React, { useContext } from 'react';
import TimerContext from '../../lib/TimerContext';

export default function StartSplitButton(props) {
    const context = useContext(TimerContext);

    return context.isPlaying ?
        <button className="c-btn c-btn--primary" onClick={() => context.split(Date.now())}>Split</button> :
        <button className="c-btn c-btn--primary" onClick={() => context.start(Date.now())}>Start</button>;
}