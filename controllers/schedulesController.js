const db = require("../mongooseModels");

// Defining methods for the schedulesController
module.exports = {
  findAll: function(req, res) {
    // console.log("req.query", req.query);
    db.Schedule
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByDay: function(req, res) {
    console.log("req.params", req.params);
    db.Schedule
      .find(req.params.day)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("create route", req.body);
    db.Schedule
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Schedule
      .findOneAndUpdate({ day: req.params.day }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Schedule
      .findByDay({ day: req.params.day })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
