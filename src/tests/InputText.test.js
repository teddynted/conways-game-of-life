import React from 'react';
import { shallow } from '../enzyme';
import TextFieldWrapper from '../Components/Form/InputText';

describe('Generation text input component', () => {
    it('Should change value when onChange was called', () => {
        const onChange = jest.fn();
        const props = {
            labelText: 'Generations (1-8):',
            name: 'generation',
            id: 'generation',
            onChange,
            value: '4',
            type: 'number',
            placeholder: 'Generations',
            state: {
                generation: 4,
                cellSize: 40,
                boardSize: 400
            }
        }
        const wrapper = shallow(<TextFieldWrapper {...props} />);
        wrapper.find('#generation').simulate('change', '4');
        expect(onChange).toHaveBeenCalledWith('4');
    })
});

describe('cellSize text input component', () => {
    it('Should change value when onChange was called', () => {
        const onChange = jest.fn();
        const props = {
            labelText: 'Cell Size',
            name: 'cellSize',
            id: 'cellSize',
            onChange,
            value: '40',
            type: 'number',
            placeholder: 'cellSize',
            state: {
                generation: 4,
                cellSize: 40,
                boardSize: 400
            }
        }
        const wrapper = shallow(<TextFieldWrapper {...props} />);
        wrapper.find('#cellSize').simulate('change', '40');
        expect(onChange).toHaveBeenCalledWith('40');
    })
});

describe('boardSize text input component', () => {
    it('Should change value when onChange was called', () => {
        const onChange = jest.fn();
        const props = {
            labelText: 'Board Size',
            name: 'boardSize',
            id: 'boardSize',
            onChange,
            value: '400',
            type: 'number',
            placeholder: 'boardSize',
            state: {
                generation: 4,
                cellSize: 40,
                boardSize: 400
            }
        }
        const wrapper = shallow(<TextFieldWrapper {...props} />);
        wrapper.find('#boardSize').simulate('change', '400');
        expect(onChange).toHaveBeenCalledWith('400');
    })
});