import React, { useContext } from 'react';
import TimerContext from '../../lib/TimerContext';
import renderTime from '../../lib/renderTime';
import styles from './SplitList.module.css';

export default function SplitList(props) {
    const splits = useContext(TimerContext).splits;

    const splitTimes = splits.map(split => (
        <li className={styles.split} key={split}>{renderTime(split)}</li>
    ));
    return (<div>
        <h2 className="c-hdg c-hdg--2">Splits</h2>
        <ol className={styles.list}>
            { splitTimes }
        </ol>
    </div>);
}
