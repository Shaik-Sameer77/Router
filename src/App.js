import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/organism/Navbar";
import Home from "./Components/atoms/Home";
import Register from "./Components/atoms/Register";
import Login from "./Components/atoms/Login";
import AboutUs from "./Components/atoms/AboutUs";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/Register" component={Register} />
        <Route path="/Login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
