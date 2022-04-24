import {combineReducers, createStore} from 'redux';
import authReducer from './authReducer';
import deviceReducer from './deviceReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({authReducer, deviceReducer})

const store = createStore(rootReducer, composeWithDevTools())

export default store;