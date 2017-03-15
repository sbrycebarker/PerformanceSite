var Turbo = require('../models/turbos');

module.exports =
{
  create: function(req, res, next) {
    var turbo = new Turbo(req.body);
      turbo.save(function(err, turbo) {
        if(err) {
          res.status(500).json(err);
        } else {
          res.status(200).json(turbo);
        }
      })

  },
  read: function(req, res, next) {
    Turbo.find().exec(function(err, response){
        if(err) {
          res.status(500).json(err)
        } else {
          res.json(response)
        }
      });
  },
  update: function(req, res, next) {
    Turbo.findByIdAndUpdate(req.params.id, req.body, function(error, turbo){
      if(error) {
        return res.status(500).json(error)
      } else {
        return res.json(turbo)
      }
    });
  },
  show: function(req, res, next) {
    Turbo.findById(req.params.id, function(err, response){
        if(err) {
          res.status(500).json(err)
        } else {
          res.json(response)
        }
      });
  },
  destroy: function(req, res, next) {
    console.log(req.params.id);
    Turbo.findByIdAndRemove(req.params.id, function(error, turbo){
      console.log(turbo);
      if(error) {
        return res.status(500).json(error)
      } else {
        return res.json(turbo)
      }
    });
  },
};
