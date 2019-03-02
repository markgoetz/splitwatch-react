import React from 'react';
import PropTypes from 'prop-types';
import styles from './HorizontalLayout.module.css';

export default function HorizontalLayout(props) {
    let additionalClassname = '';
  
    switch (props.align) {
        case 'top':
            additionalClassname = styles.top;
            break;
        case 'middle':
            additionalClassname = styles.middle;
            break;
        case 'bottom':
            additionalClassname = styles.bottom;
            break;
        default:
            break;
    }

    const className = styles.horizontalLayout + ' ' + additionalClassname;

    return (<div className={className}>
        {props.children}
    </div>);
}

HorizontalLayout.propTypes = {
    align: PropTypes.oneOf(['top', 'middle', 'bottom'])
};