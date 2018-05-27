import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import {App} from './components/app';
import {rootReducer} from '@app/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, /* preloadedState, */ composeWithDevTools(
    applyMiddleware()
));


ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>, document.querySelector('.container'));
