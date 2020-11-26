import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BoardComponent from '../Components/BoardComponent';

const BoardWrapper = styled.div`
    width: 400px;
    height: 400px;
    padding: 0;
`;

class BoardContainer extends Component {

    state = {
        generation: 0,
        cellSize: 0,
        boardSize: 0
    }
    
    componentDidMount(){
        this.setState(this.props.config)
    }

    render() {
        return <BoardWrapper>
                    { this.state.boardSize && 
                        <BoardComponent 
                            config={this.props.config}
                        /> 
                    }
                </BoardWrapper>;
    }
    
}

// Validate Component Props 
BoardContainer.propTypes = {
    config: PropTypes.object,
    setConfig: PropTypes.func
};


export default BoardContainer;