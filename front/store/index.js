import {combineReducers, createStore} from 'redux';
import authReducer from './authReducer';
import deviceReducer from './deviceReducer';
import pagesReducer from './PagesReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({authReducer, deviceReducer, pagesReducer})

const store = createStore(rootReducer, composeWithDevTools())

export default store;