'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import Main from 'components/Main.jsx';
import {main} from 'states/main-reducers.js';
import {library} from 'states/library-reducers.js';
import {reading} from 'states/reading-reducers.js';
import {setting} from 'states/setting-reducers.js';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';

window.onload = function() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(combineReducers({
        main,
        library,
        reading,
        setting,
    }), composeEnhancers(applyMiddleware(thunkMiddleware)));

    ReactDOM.render(
        <Provider store={store}>
            <Main />
        </Provider>,
        document.getElementById('root')
    );
};
