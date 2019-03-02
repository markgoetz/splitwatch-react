import React from 'react';
import TimerContext from '../../lib/TimerContext';

export default class TimerProvider extends React.Component {
    constructor(props) {
        super(props);

        this.start = time => {
            this.setState({
                isPlaying: true,
                startTime: time
            });
        };

        this.pause = time => {
            if (!this.state.isPlaying) return;
        
            this.setState({
                isPlaying: false,
                baseTime: time - this.state.startTime + this.state.baseTime
            });
        };

        this.stop = time => {
            this.setState({
                isPlaying: false,
                startTime: time,
                baseTime: 0
            });
        };

        this.reset = time => {
            this.stop(time);
        };

        this.setBaseTime = time => {
            this.setState({
                baseTime: time
            });
        };

        this.split = time => {
            const splitTime = time - this.state.startTime + this.state.baseTime;
            this.setState({
                splits: [...this.state.splits, splitTime]
            });
        };

        this.state = {
            isPlaying: false,
            startTime: 0,
            baseTime: 0,
            splits: [],
            start: this.start,
            pause: this.pause,
            stop: this.stop,
            reset: this.reset,
            setBaseTime: this.baseTime,
            split: this.split
        };
    }

    render() { 
        return <TimerContext.Provider value={this.state}>
            {this.props.children}
        </TimerContext.Provider>
    }
}