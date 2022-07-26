import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import reduxLogger from "redux-logger";
import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import toDoReducer from "./slices/toDoSlice";
import credentialReducer from "./slices/credentialSlice";
import restaurantListSlice from "./slices/restaurantListSlice";
import filterSlice from "./slices/filterSlice";
import activeRestaurant from "./slices/activeRestaurantSlice";

/**
 * Redux store
 */
const reduxStateSyncConfig = {};

const persistConfig = {
  key: "persist-root",
  storage,
};

const reducer = combineReducers({
  todo: toDoReducer,
  user: credentialReducer,
  restaurantList: restaurantListSlice,
  filter: filterSlice,
  selectedRestaurant: activeRestaurant,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const middlewares = [
  createStateSyncMiddleware(reduxStateSyncConfig),
  reduxLogger,
  thunk,
];
const store = configureStore({
  reducer:persistedReducer,
  middleware: [...middlewares],
});

initMessageListener(store);

export const persistor = persistStore(store);

export default store;
