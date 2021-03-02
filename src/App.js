import React from "react";
import Header from "./components/header";
import HomePage from "./components/homePage";
import Signin from "./components/signInPage";
import Signup from "./components/signUpPage";
import PasswordReset from "./components/passResetPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./scss/main.scss";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/password-recovery" component={PasswordReset} />
    </Router>
  );
}

export default App;
