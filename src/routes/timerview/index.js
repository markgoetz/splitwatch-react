import React, {Component} from 'react';
import VerticalLayout from '../../components/VerticalLayout/VerticalLayout';
import TimerComponent from '../../components/TimerComponent/TimerComponent';
import SplitList from '../../components/SplitList/SplitList';
import Wrapper from '../../components/Wrapper/Wrapper';

export default class TimerView extends Component {
  render() {
    return (<Wrapper align="left">
      <VerticalLayout align="left">
        <TimerComponent {...this.props} />
        <SplitList splits={this.props.splits} />
      </VerticalLayout>
    </Wrapper>);
  }
}