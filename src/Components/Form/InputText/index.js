import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { validateNumber } from '../../../utils/validation';

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 15px 0;
    width: 200px;
`;

const InputLabel = styled.label`
    font-size: 14px;
    font-weight: 500;
    margin: 5px 0;
    display: inline-block;
`;

const InputText = styled.input`
    background: rgb(255, 255, 255);
    border-radius: 2px;
    border: 1px solid rgb(217, 217, 217);
    height: 32px;
    padding: 0 6px;
`;

const ValidationText = styled.span`
    color: #900;
    display: inline-block;
    margin: 8px 0;
`;

const validation = (field, value) => {
    if(field === 'generation' && !validateNumber(value)) {
        return <ValidationText>Invalid generation</ValidationText>
    }
    if(field === 'cellSize' && !validateNumber(value)) {
        return <ValidationText>Invalid cell size</ValidationText>
    }
    if(field === 'boardSize' && !validateNumber(value)) {
        return <ValidationText>Invalid board size</ValidationText>
    }
    return ``;
}

const FormTextInput = props => {
    const {
        labelText,
        id,
        placeholder,
        value,
        onChange
    } = props;
    return (
        <InputWrapper>
            <InputLabel htmlFor={id}>{labelText}</InputLabel>
            <InputText 
                type="number" 
                onChange={onChange}
                value={value}
                placeholder={placeholder} 
                id={id} 
                name={id}
            />
            {validation(id, value)}
        </InputWrapper>
    );
};

FormTextInput.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.any,
    id: PropTypes.string,
    labelText: PropTypes.string
};

export default FormTextInput;