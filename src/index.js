import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import 'antd/dist/antd.css';
import './index.scss';
import App from './containers';
import { Provider } from 'react-redux';
import store from './store';
import * as serviceWorker from './serviceWorker';
axios.defaults.baseURL = "https://api.giphy.com/v1/gifs/";

const target = document.getElementById('root');
render(
  <Provider store={store}>
    <App />
  </Provider>
  , target
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
