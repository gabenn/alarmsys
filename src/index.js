import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter as Router} from 'react-router-dom';

const rootElement = document.getElementById('root')
if(rootElement) ReactDOM.render(
<Router>
<App/>
</Router>
,rootElement);