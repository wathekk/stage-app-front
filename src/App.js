import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./App.css";

import Index from "./Pages/LandingPage/Index-page.jsx";
import Login from "./Pages/LoginPage/login-page.jsx";
import Footer from "./Components/views/Footer/Footer.component.jsx";
//Redux
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/index" component={Index} />
          <Route path="/login" component={Login} />
          <Redirect to="/index" />
          <Redirect from="/" to="/index" />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
