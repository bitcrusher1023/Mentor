/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputField = ({ label, type, value, placeholder, onChange }) => (
    <Label>
        {label}
        <Input
            type={type}
            value={value}
            placeholder= {placeholder}
            onChange={e => onChange(e.target.value)}
        />
    </Label>
);

const Label = styled.label`
    display: flex;
    flex-direction: column;
    color: #f65261;
    font-size: 1.2rem;
    text-transform: uppercase;
`;

const Input = styled.input`
    height: 30px;
    border: none;
    opacity: 0.8;
    color: #fff;
    font-size: 18px;
    background: #424242;
    padding: 10px 20px;
    margin: 20px 0;
`;

InputField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    placeholder: PropTypes.string,
    onChange: PropTypes.func
};

InputField.defaultProps = {
    label: '',
    type: 'text',
    value: '' || 0,
    placeholder: '',
    onChange: () => {},
};

export default InputField;
