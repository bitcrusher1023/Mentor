/* eslint-disable import/prefer-default-export */
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { rootReducer} from '../reducers';
// import { ping } from './enhancers/ping'; // <-- подключаем наш enhancer

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)));