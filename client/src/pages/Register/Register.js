import React, { Component } from "react";
import API from "../../utils/API";
import Nav from "../../components/Nav";

class Register extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    currentUser: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      API.register({
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
      })
        .then(res => {
          
          if(res.data.user){
            console.log(res.data)
          } else { console.log(res.data); }
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

          <div className="col-sm-6" id="signupDiv">
            <div id="signUpMsg"></div>
            <h2>Sign Up</h2>
            <form action="" method="post" id="signupForm">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    onChange={this.handleInputChange} 
                    className="form-control" 
                    type="text" 
                    name="username" 
                    id="name" 
                    placeholder="At least 6 characters" />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    onChange={this.handleInputChange}
                    className="form-control" 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="yourname@example.com" />
                </div>

                <div className="form-group ">
                  <label htmlFor="password">Password</label>
                  <input className="form-control"
                    onChange={this.handleInputChange} 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="At least 6 characters" />
                </div>

                <div className="form-group ">
                  <label htmlFor="confirm-password">Confirm password</label>
                  <input 
                    className="form-control" 
                    type="password" 
                    name="confirmPassword" 
                    id="confirmPassword" />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-block btn-primary"
                  disabled={!(this.state.password && this.state.email && this.state.username)}
                  onClick={this.handleFormSubmit}>
                  Sign Up
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Register;
