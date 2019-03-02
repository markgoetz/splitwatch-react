import React from 'react';
import PropTypes from 'prop-types';
import styles from './VerticalLayout.module.css';

export default function VerticalLayout(props) {
    let additionalClassname = '';
  
    switch (props.align) {
        case 'left':
            additionalClassname = styles.left;
            break;
        case 'right':
            additionalClassname = styles.right;
            break;
        case 'center':
            additionalClassname = styles.center;
            break;
        default:
            break;
    }

    const className = styles.verticalLayout + ' ' + additionalClassname;

    return (<div className={className}>
        {props.children}
    </div>);
}

VerticalLayout.propTypes = {
    align: PropTypes.oneOf(['left', 'center', 'right'])
};