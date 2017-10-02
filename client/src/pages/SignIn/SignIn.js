import React, { Component } from "react";

const SignUp = () => (
  <div class="col-sm-6" id="signinDiv"> 
    <div id="signInMsg"></div>
      <h2>Sign In</h2>
      <form id="signinForm">
          <div class="form-group">
              <label for="email">Email address</label>
              <input type="email" id="signInEmail" name="signInEmail" class="form-control" placeholder="Email address"  autofocus />
          </div>

          <div class="form-group">
              <label for="inputPassword">Password</label>
              <input type="password" id="signInPassword" name="signInPassword" class="form-control" placeholder="Password" />
          </div>

          <button class="btn btn-primary btn-block" type="submit">Sign in</button>
      </form>

      <hr/>
      <p>Don't have an account</p>
      <a href="" class="btn btn-default btn-block" role="button" id="signupButton">Create your account</a>
  </div>
);

export default SignUp;
