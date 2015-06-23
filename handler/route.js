'use strict';

var util = require('../lib/util');
var _ = require('lodash');

module.exports = function(sails) {

  /**
   * Add route configure
   * @param {string} controller controller name
   * @param {string} action
   * @param {string|Array} route
   */
  var addRoute = function(controller, action, route) {
    sails.config.routes[route] = controller + '.' + action;
  };

  return function hadlePolicyAnnotation(filePath, annotation) {

    //Get controller name
    var controllerName = util.getControllerName(filePath);
    addRoute(controllerName, annotation.target, annotation.value);
  };
};
