import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';
import App from './App';
import { DeveloperContextProvider } from './context/dev-context';

ReactDOM.render(
    <React.StrictMode>
        <DeveloperContextProvider>
            <App />
        </DeveloperContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
