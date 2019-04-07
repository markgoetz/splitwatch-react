import React, { Component } from 'react';
import TimerProvider from '../../components/TimerProvider/TimerProvider';
import TimerComponent from '../../components/TimerComponent/TimerComponent';
import LastSplit from '../../components/LastSplit/LastSplit';
import SplitList from '../../components/SplitList/SplitList';
import StartSplitButton from '../../components/StartSplitButton/StartSplitButton';
import TimerContext from '../../lib/TimerContext';

export default class ControlsView extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.baseTime !== this.props.baseTime) {
            this.timer.setBaseTime(nextProps.baseTime);
        }
    }

    render() {
        return (<div>
            <TimerProvider>
                <div className="o-vertical o-vertical--center">
                    <TimerComponent />
                    <LastSplit />
                    <div className="o-sidebar">
                        <div className="o-vertical">
                            <StartSplitButton />
                            <div className="o-horizontal">
                                <TimerContext.Consumer>
                                    {(context => <>
                                        <button className="c-btn c-btn--secondary" onClick={() => context.pause(Date.now())}>Pause</button>
                                        <button className="c-btn c-btn--secondary" onClick={() => context.stop(Date.now())}>Stop</button>
                                        <button className="c-btn c-btn--secondary" onClick={() => context.reset(Date.now())}>Reset</button>
                                    </> )}
                                </TimerContext.Consumer>
                            </div>
                        </div>
                        <SplitList />
                    </div>
                </div>
            </TimerProvider>
        </div>);
    }
}
