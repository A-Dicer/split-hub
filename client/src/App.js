import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import NoMatch from "./pages/NoMatch";




// const App = () =>
//   <Router>
//     <div>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/home.html" component={Home} />
//         <Route path="/signin.html" component={SignIn} />
//         <Route path="/signup.html" component={SignUp} />
//         <Route component={NoMatch} />
//       </Switch>
//     </div>
//   </Router>;


class App extends Component {
  
  state = {
    loggedin: false
  };

  render() {
    return (
      <Router>
        <div>
      {this.state.loggedin ? (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home.html" component={Home} />      
          </Switch>
       
      ) : (
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route path="/signup.html" component={SignUp} />
            <Route component={SignIn} />
          </Switch>
      )}
        </div>
      </Router>
    );
  }
}

export default App;

