import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.css';

export default function Button(props) {
    const baseClassName = style.button;
    const variantClassName = props.isPrimary ? style.primary : style.secondary;
    const className = [baseClassName, variantClassName].join(' ');
    return <button className={className} onClick={props.onClick}>{props.children}</button>;
}

Button.propTypes = {
    isPrimary: PropTypes.bool,
    onClick: PropTypes.func.isRequired
};