import React from 'react';
import ReactDOM from 'react-dom';
// Import App Component
import App from './components/App';
import store from './store';
import { Provider } from 'react-redux';
// Render app in root element
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('root')
);
