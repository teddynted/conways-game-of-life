import React from 'react';
import TextInput from './Form/InputText';
import styled from 'styled-components';

const Form = styled.form`
    padding: 0;
    margin: 0;
    height: ${props => props.height};
    width: ${props => props.width};
`;

const Button = styled.input`
    padding: 10px;
    margin: 0;
    height: ${props => props.height};
    width: ${props => props.width};
    background-color: #000;
    color: #fff;
    border: none;
    &:focus {
        outline:0;
        outline: none;
    }
`;

const ConfigurationComponent = ({state, handleChangeValue, handleSubmit}) => {
    return <Form>
        <TextInput
            labelText="Generations (1-8):"
            id="generation"
            value={state.generation}
            name="generation"
            onChange={handleChangeValue}
        />
        <TextInput
            labelText="Cell Size"
            id="cellSize"
            value={state.cellSize}
            name="cellSize"
            onChange={handleChangeValue}
        />
        <TextInput
            labelText="Board Size:"
            id="boardSize"
            value={state.boardSize}
            name="boardSize"
            onChange={handleChangeValue}
        />
        <Button onClick={handleSubmit} type="submit" />
    </Form>;
}

export default ConfigurationComponent;