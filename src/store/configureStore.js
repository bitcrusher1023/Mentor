/* eslint-disable import/prefer-default-export */
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { rootReducer} from '../reducers';
// import { ping } from './enhancers/ping'; // <-- подключаем наш enhancer

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));