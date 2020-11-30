import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { setConfig, setLoader } from './Redux/Actions';
import BoardContainer from './Containers/BoardContainer';
import ConfigurationContainer from './Containers/ConfigurationContainer';
import styled from 'styled-components';
import WebFont from 'webfontloader';

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5% auto;
    width: 50%;
    font-family: 'Montserrat', sans-serif;
`;

class App extends Component {
    render() {
        WebFont.load({
            google: {
                families: ['Montserrat:wght@100', 'sans-serif']
            }
        });
        const {
            config,
            setConfig,
            isLoading,
            setLoader
        } = this.props;
        return <div style={{
            'textAlign': 'center',
        }}>
            <p style={{
                'margin': '1% auto',
                'width': '50%',
                'fontFamily': "'Montserrat', sans-serif"
            }}>
                The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.[1] It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves ~ Wikipedia.
            </p>
            <Content>
                <ConfigurationContainer setLoader={setLoader} isLoading={isLoading} config={config} setConfig={setConfig} />
                <BoardContainer config={config} />
            </Content>
        </div>;
    }
}

// Validate Component Props 
App.propTypes = {
    config: PropTypes.object,
    setConfig: PropTypes.func
};

// Connect our main component to redux store
const mapStateToProps = ({config, isLoading}) => ({config, isLoading});
const mapDispatchToProps = dispatch => bindActionCreators( {setConfig, setLoader}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(App)
