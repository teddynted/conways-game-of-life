import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ConfigurableComponent from '../Components/ConfigurationComponent';
import { validateNumber } from '../utils/validation';

class ConfigurationContainer extends Component {

    state = {
        generation: 4,
        cellSize: 40,
        boardSize: 400
    };

    componentDidMount(){
        this.setState(this.props.config)
    }
    
    handleChangeValue = e => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    }

    handleSubmit = e => {
        this.props.setLoader(true);
        // Validate state object before sending it to redux store
        const isIntegers = validateNumber(Number(this.state.generation)) > 0 && validateNumber(Number(this.state.cellSize)) > 0 && 
        validateNumber(Number(this.state.boardSize)) > 0;
        const isBoardSizeGreaterThanCellsSize = Number(this.state.boardSize) >= Number(this.state.cellSize);
        const isCellsSizeMultipleOfBoardSize = Number(this.state.boardSize) % Number(this.state.cellSize) === 0 || false;
        if(isIntegers && isBoardSizeGreaterThanCellsSize && isCellsSizeMultipleOfBoardSize) {
            // Update redux store with new configuration values
            this.props.setConfig({
                generation: Number(this.state.generation),
                cellSize: Number(this.state.cellSize),
                boardSize: Number(this.state.boardSize)
            });
            setTimeout(()=>{
                this.props.setLoader(false);
            }, 1000);
        }
        e.preventDefault();
    }

    render() {
        const {
            config,
            isLoading
        } = this.props;
        return <ConfigurableComponent 
                    state={this.state} 
                    config={config}
                    isLoading={isLoading}
                    handleChangeValue={this.handleChangeValue.bind(this)}
                    handleSubmit={this.handleSubmit.bind(this)}
                />
    }

}

// Validate Component Props 
ConfigurationContainer.propTypes = {
    config: PropTypes.object
};


export default ConfigurationContainer;