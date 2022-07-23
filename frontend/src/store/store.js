import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import reduxLogger from "redux-logger";
import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync";

import toDoReducer from "./slices/toDoSlice";
import credentialReducer from "./slices/credentialSlice";
import restaurantListSlice from "./slices/restaurantListSlice";
import filterSlice from "./slices/filterSlice";

/**
 * Redux store
 */
const reduxStateSyncConfig = {};

const reducer = combineReducers({
  todo: toDoReducer,
  user: credentialReducer,
  restaurantList: restaurantListSlice,
  filter: filterSlice,
});
const middlewares = [
  createStateSyncMiddleware(reduxStateSyncConfig),
  reduxLogger,
  thunk,
];
const store = configureStore({
  reducer,
  middleware: [...middlewares],
});

initMessageListener(store);

export default store;
