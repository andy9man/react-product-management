import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
    BrowserRouter,
} from 'react-router-dom';
import './index.css';
import './ui-toolkit/css/nm-cx/main.css';
import store from './store';
import App from './App';

// Cannot render App directory because it does not have the store component
const Root = () => {
  return (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));