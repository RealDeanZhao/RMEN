import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from '../universal/store/configureStore';
import App from '../universal/containers/App/App.js';

const initialState = window.__INITIAL_STATE__;
var store = configureStore(initialState);

ReactDom.render(
  <Provider store={store} >
    <App />
  </Provider>,
    document.getElementById('root')
);
