import React from 'react';
import { shallow } from '../enzyme';
import ConfigurableComponent from '../Components/ConfigurationComponent';

describe('Configurable Component fields test suite', () => {
    it('should render the form', () => {
        const state = {
            generation: 4,
            cellSize: 40,
            boardSize: 400
        };
        const wrapper = shallow(<ConfigurableComponent state={state} />).dive();
        expect(wrapper.find('form').exists()).toBe(true);
        expect(wrapper.find('#generation').length).toEqual(1);
        expect(wrapper.find('#cellSize').length).toEqual(1);
        expect(wrapper.find('#boardSize').length).toEqual(1);
    })
    it('Test Save settings click event', () => {
        const state = {
            generation: 4,
            cellSize: 40,
            boardSize: 400
        };
        const mockCallBack = jest.fn();
        const button = shallow(<ConfigurableComponent state={state} handleSubmit={mockCallBack} />).dive();
        const cancelBtn = button.find('#submit');
        cancelBtn.simulate('click');
        expect(mockCallBack).toHaveBeenCalled();
    })
});
