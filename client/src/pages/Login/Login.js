import React, { Component } from "react";
import API from "../../utils/API";
import Nav from "../../components/Nav";

class Login extends Component {
  state = {
    email: "",
    password: "",
    currentUser: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSignInFormSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      API.login({
        email: this.state.email,
        password: this.state.password
      })
        .then(res => {
          if (res.data.user) {
            window.location.href = "/dash";
          }
          else {
            console.log("no user");
          }
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <header>
              <Nav userInfo={this.state.currentUser} />
        </header>

        <div className="container">  

          <div className="row">

              <div className="col-sm-6" id="signinDiv"> 
                <div id="signInMsg"></div>
                  <h2>Sign In</h2>
                  <form id="signinForm">
                      <div className="form-group">
                          <label htmlFor="email">Email address</label>
                          <input 
                            onChange={this.handleInputChange}
                            type="email" 
                            id="signInEmail" 
                            name="email" 
                            className="form-control" 
                            placeholder="Email address"  
                            autoFocus />
                      </div>

                      <div className="form-group">
                          <label htmlFor="inputPassword">Password</label>
                          <input
                            onChange={this.handleInputChange} 
                            type="password" 
                            id="signInPassword" 
                            name="password" 
                            className="form-control" 
                            placeholder="Password" />
                      </div>

                      <button 
                        className="btn btn-primary btn-block" 
                        type="submit" 
                        disabled={!(this.state.password && this.state.email)}
                        onClick={this.handleSignInFormSubmit}>
                        Sign in
                      </button>
                  </form>

                  <hr/>
                  <p>Don't have an account</p>
                  <a href="/register" 
                  className="btn btn-default btn-block" 
                  role="button" 
                  id="signupButton">
                  Create your account</a>
              </div>    
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
