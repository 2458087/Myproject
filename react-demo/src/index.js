import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/common.css';
import Router from './Router';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router />,
  document.getElementById('root')
);
serviceWorker.unregister();
