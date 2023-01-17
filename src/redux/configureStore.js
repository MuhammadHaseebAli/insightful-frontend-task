import { combineReducers } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import dashboard from './reducers/dashboard';

let reducer = combineReducers({
  dashboard
});

const store = configureStore({
    reducer
});

export default store;