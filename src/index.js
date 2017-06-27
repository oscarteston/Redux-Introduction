import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

import appReducer from './reducers/appReducer';
import App from './components/app';

const loggerMiddleware = createLogger();

const store = createStore(
    appReducer,
    applyMiddleware(
        thunkMiddleware, // nos permite despachar funciones
        loggerMiddleware // registra las acciones
    )
)
window.store = store;
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.querySelector('.container'));