
import { h } from 'preact';
import TimerView from './index';
import { shallow } from 'preact-render-spy';

describe('TimerView', () => {
  test('Renders correctly with no splits', () => {
    const context = shallow(<TimerView isPlaying startTime={1000} baseTime={2000} />);
    expect(context).toMatchSnapshot();
  });

  test('Renders correctly with splits', () => {
    const context = shallow(<TimerView isPlaying startTime={1000} baseTime={2000} splits={[500, 700]} />);
    expect(context).toMatchSnapshot();
  });
});