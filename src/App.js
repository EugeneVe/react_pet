import React from "react";
import Header from "./components/header";
import HomePage from "./components/homeP";
import Signin from "./components/signInP";
import Signup from "./components/signUpP";
import PasswordReset from "./components/passResetP";
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
