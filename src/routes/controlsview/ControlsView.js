import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import VerticalLayout from '../../components/VerticalLayout/VerticalLayout';
import HorizontalLayout from '../../components/HorizontalLayout/HorizontalLayout';
import Wrapper from '../../components/Wrapper/Wrapper';
import TimerProvider from '../../components/TimerProvider/TimerProvider';
import TimerComponent from '../../components/TimerComponent/TimerComponent';
import LastSplit from '../../components/LastSplit/LastSplit';
import SplitList from '../../components/SplitList/SplitList';
import StartSplitButton from '../../components/StartSplitButton/StartSplitButton';
import SidebarLayout from '../../components/SidebarLayout/SidebarLayout';
import TimerContext from '../../lib/TimerContext';

export default class ControlsView extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.baseTime !== this.props.baseTime) {
            this.timer.setBaseTime(nextProps.baseTime);
        }
    }

    render() {

        return (<div>
            <Header />
            <TimerProvider>
                <Wrapper align="center">
                    <VerticalLayout align="center">
                        <TimerComponent />
                        <LastSplit />
                        <SidebarLayout>
                            <VerticalLayout>
                                <StartSplitButton />
                                <HorizontalLayout>
                                    <TimerContext.Consumer>
                                        {(context => <>
                                            <Button onClick={() => context.pause(Date.now())}>Pause</Button>
                                            <Button onClick={() => context.stop(Date.now())}>Stop</Button>
                                            <Button onClick={() => context.reset(Date.now())}>Reset</Button>
                                        </> )}
                                    </TimerContext.Consumer>
                                </HorizontalLayout>
                            </VerticalLayout>
                            <SplitList />
                        </SidebarLayout>
                    </VerticalLayout>
                </Wrapper>
            </TimerProvider>
        </div>);
    }
}
