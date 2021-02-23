import React from "react";
import Header from "./components/header";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import PasswordRecovery from "./pages/passrecovery";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./scss/main.scss";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/password-recovery" component={PasswordRecovery} />
    </Router>
  );
}

export default App;
