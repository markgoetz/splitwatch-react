import React from 'react';
import PropTypes from 'prop-types';
import style from './Wrapper.module.css';

export default function Wrapper(props) {
    const baseStyle = style.wrapper;
    let alignStyle = '';

    switch (props.align) {
        case 'left':
            alignStyle = style.left;
            break;
        case 'center':
            alignStyle = style.center;
            break;
        case 'right':
            alignStyle = style.right;
            break;
        default:
            break;
    }

    const wrapperStyle = `${baseStyle} ${alignStyle}`;

    return <div className={wrapperStyle}>{props.children}</div>;
}

Wrapper.propTypes = {
    align: PropTypes.oneOf(['left', 'center', 'right'])
};