import React, { useState } from 'react';
import ControlsView from '../routes/controlsview/ControlsView';
import '../style/index.css';

const initialTimer = {
    isPlaying: false,
    startTime: 0,
    baseTime: 0
};

export default function(props) {
    const [timer] = useState({ initialTimer });
    const [splits] = useState([]);

    return (
        <div id="app">
            <ControlsView startTime={timer.startTime}
                baseTime={timer.baseTime}
                isPlaying={timer.isPlaying}
                splits={splits} />
        </div>
    );
}
