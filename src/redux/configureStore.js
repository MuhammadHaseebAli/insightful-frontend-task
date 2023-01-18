import { combineReducers } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import dashboard from './reducers/dashboard';
import editEmployee from './reducers/editEmployee';

let reducer = combineReducers({
  dashboard,
  editEmployee
});

const store = configureStore({
  reducer
});

export default store;