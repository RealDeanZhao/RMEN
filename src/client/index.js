import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from '../universal/store/configureStore';
import App from '../universal/containers/App/App.js';

var store = configureStore();

ReactDom.render(
  <Provider store={store} >
    <App />
  </Provider>,
    document.getElementById('root')
);
