'use strict';

module.exports = function(req, res, next) {
  req.second = true;
  next();
};
