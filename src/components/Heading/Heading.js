import React from 'react';
import PropTypes from 'prop-types';
import styles from './Heading.module.css';

export default function Heading(props) {
  const tagProps = { ...props };
  delete tagProps.children;
  delete tagProps.level;

    switch (props.level) {
        case '1':
            return <h1 {...tagProps} className={styles[`level${props.level}`]}>{ props.children }</h1>;
        case '2':
            return <h2 {...tagProps} className={styles[`level${props.level}`]}>{ props.children }</h2>;
        case '3':
            return <h3 {...tagProps} className={styles[`level${props.level}`]}>{ props.children }</h3>;
        case '4':
            return <h4 {...tagProps} className={styles[`level${props.level}`]}>{ props.children }</h4>;
        case '5':
            return <h5 {...tagProps} className={styles[`level${props.level}`]}>{ props.children }</h5>;
        case '6':
            return <h6 {...tagProps} className={styles[`level${props.level}`]}>{ props.children }</h6>;
        default:
            return;
    }
}

Heading.propTypes = {
    level: PropTypes.oneOf(['1', '2', '3', '4', '5', '6'])
};