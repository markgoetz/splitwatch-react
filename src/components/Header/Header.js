import React from 'react';
import Heading from '../Heading/Heading';
import styles from './Header.module.css';

export default function Header(props) {
  return (<div className={styles.headerBg}>
    <Heading level="1">SplitWatch</Heading>
  </div>);
}
