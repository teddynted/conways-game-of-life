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
    font-size: 13px;
`;

const validation = (field, value, state) => {
    const {
        boardSize,
        cellSize
    } = state;
    if(field === 'generation' && !validateNumber(value)) {
        return <ValidationText>Invalid generation</ValidationText>
    }
    if(field === 'cellSize') {
        if(value > boardSize) {
            return <ValidationText>Cells' size should be less than the size of the board.</ValidationText>
        }
        if(!validateNumber(value)) {
            return <ValidationText>Invalid cell size</ValidationText>
        }
        if(boardSize % value !== 0) {
            return <ValidationText>Cell size should be a multiple of a board size e.g 40 and 400</ValidationText>
        }
    }
    if(field === 'boardSize') {
        if(value < cellSize) {
            return <ValidationText>Board size should be greater than the cells' size.</ValidationText>
        }
        if(!validateNumber(value)) {
            return <ValidationText>Invalid board size</ValidationText>
        }
        if(value % cellSize !== 0) {
            return <ValidationText>Board size should be a multiple of a cell size e.g 400 and 40</ValidationText>
        }
    }
    return ``;
}

const FormTextInput = props => {
    const {
        labelText,
        id,
        placeholder,
        value,
        onChange,
        state
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
            {validation(id, value, state)}
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