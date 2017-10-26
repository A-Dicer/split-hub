const passport = require("passport");
const User = require("../models/user");

// Defining methods for the authController
module.exports = {

//-------------- doRegister ------------------------
//---------To register a new user ------------------

  doRegister: function(req, res, next){
    passport.authenticate('signup', function(err, user, msg){
      if(user){
        // If user is created successfully, establish a session and send a response.
        req.logIn(user, function(){
          return res.status(200).json({ 
            result: 'success', 
            user: req.user, 
            session: req.session 
          });
        });
      } else {
        // send a response object with any error or messages.
        var data = { error: err, msg: msg }
        return res.json(data);
      }
    })(req, res, next);
  },

//-------------- doLogin ------------------------
//----------To log in a user---------------------

  doLogin: function(req, res, next){
    // authenticate the user
    passport.authenticate("signin", function(err, user, msg){

      if(user){
        // If user sign in successfully, establish a session and send a response.
        req.logIn(user, function(){
          return res.status(200).json({ 
            result: 'success', 
            user: req.user, 
            session: req.session 
          });
        });
      } else {

        // If authentication fail, send a response object with any error or messages.
        var data = {
            error: err,
            msg: msg
          }
        return res.json(data);  
      }
    })(req, res, next);
  },

//-------------- logout ------------------------
//----------To log out a user-------------------

  logout: function (req, res) {
    console.log("logout");
    req.logout();
    return res.status(200).json({result:  "success"});
  }
};
