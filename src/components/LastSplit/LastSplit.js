import React, { useContext } from 'react';
import renderTime from '../../lib/renderTime';
import TimerContext from '../../lib/TimerContext';

import styles from './LastSplit.module.css';

export default function LastSplit(props) {
    const context = useContext(TimerContext);

    if (context.splits.length > 0) {
        const split = context.splits[context.splits.length - 1];
        return <div className={styles.lastSplit}>Last split: { renderTime(split) }</div>;
    }
    
    return <div className={styles.lastSplit}>No splits recorded</div>;
}
