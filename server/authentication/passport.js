var passport = require("passport");
var session = require("express-session");

module.exports = function (app) {
	app.use(session({ secret: 'catz', resave: true, saveUninitialized: true}));
	app.use(passport.initialize());
	app.use(passport.session());
}