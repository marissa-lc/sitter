// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");
const mongoose = require("mongoose");
// const Schedule = require("./mongooseModels/schedule");
// Requiring passport as we've configured it
var passport = require("./config/passport");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Setting up port and requiring models for syncing
// var PORT = process.env.PORT || 8080;
var PORT = process.env.PORT || 3001;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// Requiring our routes
// require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}

// React client routes
// require("./routes/index.js")(app)

// Connect to the Mongo DB
console.log("MAKING MONGO CONNECTION");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/sitterData", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
  });
let mongoDb = mongoose.connection;
mongoDb.on("error", console.error.bind(console, "connection error:"));

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});
