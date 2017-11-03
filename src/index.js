import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import MainStore from './MainStore';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App store={MainStore}/>, document.getElementById('root'));
registerServiceWorker();
