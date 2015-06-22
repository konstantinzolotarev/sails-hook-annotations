'use strict';

module.exports = {

  /**
   * Get Controller name by given file path
   *
   * @param  {stirng} path Path to controller file
   * @return {string}      name
   */
  getControllerName: function(path) {
    return (path.split('/').pop().replace('.js', '').replace('.coffee', ''));
  }
};
