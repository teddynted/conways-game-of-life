import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import history from "./Redux/History";
import { Router } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './Redux/Store';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();