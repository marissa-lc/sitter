// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
var jwt = require('jsonwebtoken');
var secret = 'appname-secret';
const mongoosedb = require("../mongooseModels");

module.exports = function(app) {
  const withAuth = function(req, res, next) {
    const token = 
        req.body.token ||
        req.query.token ||
        req.headers['x-access-token'] ||
        req.cookies.token;

    if (!token) {
      res.status(401).send('Unauthorized: No token provided');
    } else {
      jwt.verify(token, secret, function(err, decoded) {
        if (err) {
          res.status(401).send('Unauthorized: Invalid token');
        } else {
          req.email = decoded.email;
          next();
        }
      });
    }
  }

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    const email = req.user;
    // Issue token
    const payload = { email };
    const token = jwt.sign(payload, secret, {
      expiresIn: '1h'
    });
    res.cookie('token', token, { httpOnly: true })
      .sendStatus(200);

  });

  app.get("/api/checkToken", withAuth, function(req, res) {
    res.sendStatus(200);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        console.log(err);
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/api/logout", function(req, res) {
     res.clearCookie('token').send('cookie has been deleted');
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  // mongo
  // find by day: this works
  app.get("/api/schedules/:day", function(req, res) {
    console.log("INSIDE APP.GET IN API-ROUTES");
    console.log(req.params);
    mongoosedb.Schedule.find({day: req.params.day})
    .then(dbResults => res.json(dbResults))
    .catch(err => console.log(err));
  })

  // get all schedules: 422 error
  app.get("/api/schedules", function(req, res) {
    console.log("INSIDE APP.GET CALL FOR ALL SCHDEULES", req.params);
    mongoosedb.Schedule.find().all(req.params)
    .then(dbResult => res.json(dbResult))
    .catch(err = res.status(422).json(err));
  })

  // create a record: I think this works
  app.post("/api/schedules", function(req, res) {
    console.log("INSIDE APP.POST CALL TO CREATE RECORD");
    console.log("request params", req.params);
    mongoosedb.Schedule.create(req.body)
    .then(dbResult => res.json(dbResult))
    .catch(err => res.status(422).json(err));
  })

  // update a record: 
  app.put("/api/schedules", function(req, res) {
    console.log("INSIDE APP.PUT CALL")
    console.log(req.body);
    console.log("day:", req.body.day);
    console.log("events:", req.body.events);
    console.log("notes:", req.body.notes);
    mongoosedb.Schedule.findOneAndUpdate({ day: req.body.day }, {
      "$set": {events: req.body.events, notes: req.body.notes}
    })
    .then(dbResult => res.json(dbResult))
    .catch(err => res.status(422).json(err));
  })

};
