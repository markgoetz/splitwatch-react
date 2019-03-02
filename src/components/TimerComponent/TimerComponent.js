import React from 'react';
import renderTime from '../../lib/renderTime';
import TimerContext from '../../lib/TimerContext';

import styles from './TimerComponent.module.css';

export default class TimerComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            elapsedTime: 0
        };
        this.timeout = -1;
    }

    componentDidMount() {
        this.timeout = window.requestAnimationFrame(this.updateTime);
    }

    updateTime = () => {
        const context = this.context;
        this.setState({
            elapsedTime : (context.isPlaying) ?
                Date.now() - context.startTime + context.baseTime :
                context.baseTime
        });
        window.requestAnimationFrame(this.updateTime);
    }

    render() {
        return <div className={styles.timer}>
            { renderTime(this.state.elapsedTime, 1) }
        </div>;
    }
}

TimerComponent.contextType = TimerContext;

// export default function TimerComponent() {
//     let [elapsedTime, setElapsedTime] = useState(0);
//     let timerContext = useContext(TimerContext);

//     useEffect(() => {
//         let timeout;

//         function updateTime() {
//             setElapsedTime((timerContext.isPlaying) ?
//                     Date.now() - timerContext.startTime + timerContext.baseTime :
//                     timerContext.baseTime);

//             if (!timerContext.isPlaying) {
//                 window.clearInterval(timeout);
//             }

//             return () => {
//                 window.clearInterval(timeout);
//             }
//         }
//         timeout = window.setInterval(updateTime, 100);
//     });

//     return (
//         <div className={styles.timer}>
//             { renderTime(elapsedTime, 1) }
//         </div>
//     );
// }
