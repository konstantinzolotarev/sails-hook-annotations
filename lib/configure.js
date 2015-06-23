'use strict';

var _ = require('lodash');
var glob = require('glob');
var annotations = require('conga-annotations');
var path = require('path');

module.exports = function(sails) {

  /**
   * List of annotation handlers
   * @type {Object}
   */
  var _handlers = {};

  // create the registry
  var registry = new annotations.Registry();

  // add annotations to the registry
  registry.registerAnnotation(path.join(__dirname, '../annotation/policy'));
  registry.registerAnnotation(path.join(__dirname, '../annotation/route'));

  // Adding handlers
  // @TODO shuold be automated
  _handlers.policy = require('../handler/policy')(sails);
  _handlers.route = require('../handler/route')(sails);

  var controllersFolder = sails.config.paths.controllers;
  var pattern = controllersFolder + path.sep + '**' + path.sep + '*Controller.js';

  var handleAnnotation = function(filePath) {
    return function(annotation) {
      var name = annotation.annotation.toLowerCase();

      // Remove controllers path
      filePath = filePath.replace(controllersFolder, '');

      if (_handlers[name] && _.isFunction(_handlers[name])) {
        _handlers[name](filePath, annotation);
      } else {
        sails.log.info('No handler for annotation: ' + annotation.annotation);
      }
    };
  };

  var iterate = function(filePath) {
    // create the annotation reader
    var reader = new annotations.Reader(registry);

    // parse the annotations from a file
    reader.parse(filePath);

    // get the annotations
    var constructorAnnotations = reader.getConstructorAnnotations();
    var methodAnnotations = reader.getMethodAnnotations();
    var propertyAnnotations = reader.getPropertyAnnotations();

    // loop through and handle the annotations
    constructorAnnotations.forEach(handleAnnotation(filePath));
    methodAnnotations.forEach(handleAnnotation(filePath));
    propertyAnnotations.forEach(handleAnnotation(filePath));
  };

  return function() {
    var files = glob.sync(pattern);
    files.forEach(iterate);
  };
};
