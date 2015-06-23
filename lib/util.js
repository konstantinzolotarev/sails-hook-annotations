'use strict';

var _ = require('lodash');
var globPath = require('path');

module.exports = {

  /**
   * Get Controller name by given file path
   *
   * @param  {stirng} path Path to controller file
   * @return {string}      name
   */
  getControllerName: function(path) {
    var regExp = new RegExp('^\\' + globPath.sep + '|\\.js|\\.coffee', 'ig');
    return (path.replace(regExp, ''));
  }
};
