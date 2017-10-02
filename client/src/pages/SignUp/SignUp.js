import React, { Component } from "react";

const SignIn = () => (
    <div class="col-sm-6" id="signupDiv">
          <div id="signUpMsg"></div>
          <h2>Sign Up</h2>
          <form action="" method="post" id="signupForm">
              <div class="form-group">
                <label for="name">Name</label>
                <input class="form-control" type="text" name="name" id="name" placeholder="At least 6 characters" />
              </div>

              <div class="form-group">
                <label for="email">Email</label>
                <input class="form-control" type="email" name="email" id="email" placeholder="yourname@example.com" />
              </div>

              <div class="form-group ">
                <label for="password">Password</label>
                <input class="form-control" type="password" name="password" id="password" placeholder="At least 6 characters" />
              </div>
               <div class="form-group ">
                <label for="confirm-password">Confirm password</label>
                <input class="form-control" type="password" name="confirmPassword" id="confirmPassword" />
              </div>

              <button type="submit" class="btn btn-block btn-primary">Sign Up</button>
          </form>
        </div>
);

export default SignIn;
