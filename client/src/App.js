import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import NoMatch from "./pages/NoMatch";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home.html" component={Home} />
        <Route path="/signin.html" component={SignIn} />
        <Route path="/signup.html" component={SignUp} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;

