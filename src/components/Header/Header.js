import React from 'react';
import styles from './Header.module.css';

export default function Header(props) {
  return (<div className={styles.headerBg}>
    <h1 className="c-hdg c-hdg--1">SplitWatch</h1>
  </div>);
}
