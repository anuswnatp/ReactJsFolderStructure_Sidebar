/* eslint-disable no-inline-comments */
import React from 'react';
import PropTypes from 'prop-types';
import { InputText } from 'primereact/inputtext';
import styles from './style.module.scss';

function InputBox({
    className = '',
    disabled = false,
    errMsg = '',
    id = 'text_id', // id formatted as name_{key||uuid}
    keyfilter = null, // accepts regex
    label = '',
    placeholder = '',
    validateOnly = false, // enables validation
    size = '',
    tooltip = null, // enable Tooltip pass element string anything
    type = 'Basic',
    tooltipOptions = null,
    value = '',
    onChange = (event) => event
}) {
    const getType = () => {
        let t = type.toLowerCase();
        if (t === 'basic') {
            return 'p-field';
        } else if (t === 'float') {
            return 'p-float-label';
        } else {
            return 'p-field';
        }
    };
    const getInputSize = () => {
        let s = size.toLowerCase();
        if (s === 'sm') {
            return 'p-inputtext-lg';
        } else if (s === 'lg') {
            return 'p-inputtext-lg';
        } else {
            return '';
        }
    };
    return (
        <div className={className}>
            <span className={`${getType()} ${styles.wrapper}`}>
                {type.toLowerCase() !== 'float' && <label htmlFor={id}>{label}</label>}
                <InputText
                    className={`${getInputSize()} ${errMsg && `p-invalid ${styles.invalid}`}`}
                    disabled={disabled}
                    id={id}
                    keyfilter={keyfilter}
                    onChange={(e) => onChange(e)}
                    placeholder={placeholder}
                    tooltip={tooltip}
                    tooltipOptions={tooltipOptions}
                    validateOnly={validateOnly}
                    value={value}
                />
                {type.toLowerCase() === 'float' && <label htmlFor={id}>{label}</label>}
                <small className={`${errMsg && 'p-error'} p-d-block'`} id={id}>{errMsg}</small>
            </span>
        </div>
    );
}

InputBox.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    errMsg: PropTypes.string,
    id: PropTypes.string.isRequired,
    keyfilter: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    size: PropTypes.string,
    tooltip: PropTypes.any,
    tooltipOptions: PropTypes.object,
    type: PropTypes.string.isRequired,
    validateOnly: PropTypes.bool,
    value: PropTypes.string.isRequired
};

export default InputBox;
