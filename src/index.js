import React from 'react';
import ReactDOM from 'react-dom';
import 'grommet/grommet.min.css';
import '../node_modules/grommet-css';
import '../node_modules/grommet/scss/vanilla/index.scss';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<BrowserRouter>
    <App />
</ BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
