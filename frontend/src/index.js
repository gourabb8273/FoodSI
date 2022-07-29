import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {PersistGate} from 'redux-persist/lib/integration/react'

import App from "./App";
import store, {persistor} from "./store/store";
import PageNotFound from "./components/PageNotFound/pageNotFound";
import LoginForm from "./components/LoginForm/loginForm";
import "./index.css";
import Dashboard from "./pages/Dashboard/dashboard";
import RestaurantPage from "./pages/RestaurantPage/restaurantPage";

/**
 * Final index component with routing
 */
function IndexRoute() {
  return (
    <React.StrictMode>
      <Provider store={store}>   
      <PersistGate persistor={persistor}     >
        <Router>
          <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="/login" element={<LoginForm />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/restaurant/:id" element={<RestaurantPage />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Router>      
      </PersistGate>
      </Provider>
    </React.StrictMode>
  );
}

ReactDOM.render(<IndexRoute />, document.getElementById("root"));

reportWebVitals();
