import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import PrivateRoute from "./Routes/PrivateRoute";
import "./App.css";

import Index from "./Pages/LandingPage/Index-page.jsx";
import Login from "./Pages/LoginPage/login-page.jsx";
import Footer from "./Components/views/Footer/Footer.component.jsx";
//Redux
import { Provider } from "react-redux";
import store from "./Redux/store";
import StudentPage from "./Pages/StudentPage/Student-page";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/index" component={Index} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/user" component={StudentPage} />
          <Redirect to="/index" />
          <Redirect from="/" to="/index" />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
