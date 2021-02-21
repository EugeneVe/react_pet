import React from "react";
import Header from "./component/header";
import Home from "./page/home";
import Login from "./page/login";
import Signup from "./page/signup";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./scss/main.scss";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Router>
  );
}

export default App;
