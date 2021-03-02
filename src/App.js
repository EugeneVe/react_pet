import React from "react";
import Header from "./components/header";
import HomePage from "./components/homePage";
import Login from "./components/logInPage";
import Signup from "./components/signupPage";
import PasswordRecovery from "./components/passRecovery";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./scss/main.scss";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/password-recovery" component={PasswordRecovery} />
    </Router>
  );
}

export default App;
