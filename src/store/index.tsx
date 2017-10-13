/// <reference path="../types/index.d.ts" />
import {
    createStore,
    combineReducers
} from 'redux';
import { userReducer } from '../reducers';

const reducers = combineReducers({
    userState: userReducer
});

export const store = createStore(reducers);