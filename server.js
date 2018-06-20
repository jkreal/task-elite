const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require("body-parser");
const env = require("dotenv").load();
const exphbs = require("express-handlebars");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use("/assets", express.static("public/assets"));
app.set("views", path.join(__dirname, 'views'));
require("./server/authentication/passport")(app);

// Send every request to the React app
// Define any API routes before this runs

var models = require("./server/models");

models.sequelize.sync().then(function() {
	console.log("database is loaded");
}).catch(function(err){
	console.log("error", err);
});

app.get("/signup", function(req, res) {
	res.render("signup", {});
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
