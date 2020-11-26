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
        this.setState({ [e.currentTarget.id]: e.currentTarget.value });
    }

    handleSubmit = e => {
        // Validate state object before sending it to redux store
        if(
            validateNumber(Number(this.state.generation)) && 
            validateNumber(Number(this.state.cellSize)) > 0 && 
            validateNumber(Number(this.state.boardSize)) > 0) {
            // Update redux store with new configuration values
            this.props.setConfig({
                generation: Number(this.state.generation),
                cellSize: Number(this.state.cellSize),
                boardSize: Number(this.state.boardSize)
            })
        }
        e.preventDefault();
    }

    render() {
        const {
            config
        } = this.props;
        return <ConfigurableComponent 
                    state={this.state} 
                    config={config}
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