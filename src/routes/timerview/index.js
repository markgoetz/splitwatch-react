import React, {Component} from 'react';
import TimerComponent from '../../components/TimerComponent/TimerComponent';
import SplitList from '../../components/SplitList/SplitList';
import Wrapper from '../../components/Wrapper/Wrapper';

export default class TimerView extends Component {
  render() {
    return (<Wrapper align="left">
      <div className="o-vertical o-vertical--left">
        <TimerComponent {...this.props} />
        <SplitList splits={this.props.splits} />
      </div>
    </Wrapper>);
  }
}