import React, { useContext } from 'react';
import TimerContext from '../../lib/TimerContext';
import Button from '../Button/Button';

export default function StartSplitButton(props) {
    const context = useContext(TimerContext);

    return context.isPlaying ?
        <Button isPrimary onClick={() => context.split(Date.now())}>Split</Button> :
        <Button isPrimary onClick={() => context.start(Date.now())}>Start</Button>;
}