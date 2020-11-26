import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { setConfig } from './Redux/Actions';
import BoardContainer from './Containers/BoardContainer';
import ConfigurationContainer from './Containers/ConfigurationContainer';
import styled from 'styled-components';
import WebFont from 'webfontloader';

const AppWrapper = styled.div`
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
            setConfig
        } = this.props;
        return <AppWrapper>
            <ConfigurationContainer config={config} setConfig={setConfig} />
            <BoardContainer config={config} />
        </AppWrapper>;
    }
}

// Validate Component Props 
App.propTypes = {
    config: PropTypes.object,
    setConfig: PropTypes.func
};

// Connect our main component to redux store
const mapStateToProps = ({config, states}) => ({config, states});
const mapDispatchToProps = dispatch => bindActionCreators( {setConfig}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(App)