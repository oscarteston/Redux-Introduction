import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import appReducer from './reducers/appReducer';
import App from './components/app';

const store = createStore(appReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.querySelector('.container'));