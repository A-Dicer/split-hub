// Dependencies
var bCrypt = require('bcrypt');

module.exports = function(passport, user){
	var User = user;

	//Local strategy for username/password authentication
	var LocalStrategy = require('passport-local').Strategy;
	// In order to support login sessions, Passport will serialize and deserialize 
	// user instances to and from the session.
	// Here, the user ID is serialized to the session. 
	// When subsequent requests are received, this ID is used to find the user
	// which will be restored to req.user
	passport.serializeUser(function(user, done){
		done(null, {_id: user.id, username: user.username});
	});

	// deserialize user
	passport.deserializeUser(function(id, done) {
   	 	User.findById(id).then(function(user) {
	        if (user) { 
	            done(null, user);
	        } else {
	            done(user.errors, null);
	        }
	    });
	});

	// sign up strategy
	passport.use('signup', new LocalStrategy(
		// The verify callback for local authentication accepts username and password arguments by default.
		// Set what request fields our usernameField and passwordField are.
		{
			usernameField: 'email',
			passwordField: 'password',
			passReqToCallback: true // allows us to pass the entire request to the callback "done"
		},

		function(req, email, password, done){
			console.log("signup");
			
			// The hashed password generating function
			// Param password and return a hashed password
			var generateHash = function(password){
				return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
			};

			// Check if the emial already exist in the database
			User.findOne({ email: email	})
			.then(function(user){
				if(user){
					console.log("user already there")
					// If email exist return a message
					return done(null, false, "That email is already taken.");
				} else {
					// get a hashed password
					var userPassword = generateHash(password);
					// Create an object with user info
					var data = {
						email: email,
						password: userPassword,
						username: req.body.username,
					};
					// Insert user in database
					User.create(data).then(function(newUser, created){
					 	if(!newUser){
					 		return done(null, false, null);
					 	} else {
					 		return done(null, newUser, null);
					 	}
				 	});
				}
			});
		}
	));

	//Signin strategy
	passport.use('signin', new LocalStrategy(
		// Set what request fields our usernameField and passwordField are.
		{
			usernameField: 'email',
			passwordField: 'password',
			passReqToCallback: true
		},

		function(req, email, password, done){
			console.log("logIn");
			// Function to compare password entered with the one in database
			var isValidPassword = function(userpass, password){
				return bCrypt.compareSync(password, userpass);
			}

			// Check if the emial exist in the database
			User.findOne({ email: email })
			.then(function(user){

				if(!user) {
					// If user does not exist
					return done(null, false, "Email does not exist.");
				}
				// Validate password
				if(!isValidPassword(user.password, password)){
					return done(null, false, "Incorrect password.");
				}

				return done(null, user);
			});
		}

	));
}