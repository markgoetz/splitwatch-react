import React from 'react';
import styles from './SidebarLayout.module.css';

export default function SidebarLayout(props) {
    return (<div className={styles.layout}>
        <div className={styles.left}>{ props.children[0] }</div>
        <div className={styles.right}>{ props.children[1] }</div>
    </div>);
}