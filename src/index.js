import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DataLayer } from './components/DataLayer';
import reducer, { initialState } from './components/reducer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Maincontainer from './components/Maincontainer';

ReactDOM.render(
  <React.StrictMode>
  <Router>
  <DataLayer initialState={initialState} reducer={reducer}>
    <App />
  </DataLayer>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

