'use strict';

module.exports = {

  index: function(req, res) {
    res.send('PolicyController.index');
  },

  login: function(req, res) {
    res.send('PolicyController.login');
  },

  /** @Policy("forbidden") */
  authed: function(req, res) {
    res.send('PolicyController.authed');
  },

  /** @Policy(["addFirst", "addSecond"]) */
  array: function(req, res) {
    res.json({
      action: 'PolicyController.array',
      first: req.first || false,
      second: req.second || false
    });
  },

  /** @Policy("addSecond") */
  extended: function(req, res) {
    res.json({
      action: 'PolicyController.extended',
      first: req.first || false,
      second: req.second || false
    });
  }
};
