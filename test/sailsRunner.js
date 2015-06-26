'use strict';

var Sails = require('sails').Sails;

module.exports = {

  lift: function(cb) {
    cb = cb || function() {};
    Sails().lift({
      port: 1338,
      hooks: {
        annotations: require('../'),
        grunt: false,
      },
      log: {
        level: 'error'
      },
      paths: {
        controllers: __dirname + '/controllers',
        policies: __dirname + '/policies',
      },
      policies: {
        'PolicyController': {
          login: 'forbidden',
          extended: 'addFirst'
        }
      }
    }, cb);
  }
};
