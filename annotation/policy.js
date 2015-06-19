'use strict';

var Annotation = require('conga-annotations').Annotation;

/**
 *
 * @type {*}
 */
module.exports = Annotation.extend({

  /**
   * The name of the annotation

   * @type {String}
   */
  annotation: 'Policy',

  /**
   * The possible targets
   *
   * (Annotation.CONSTRUCTOR, Annotation.PROPERTY, Annotation.METHOD)
   *
   * @type {Array}
   */
  targets: [Annotation.METHOD],

  /**
   * The main value
   *
   * @type {String}
   */
  value: ''

});
