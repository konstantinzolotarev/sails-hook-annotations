'use strict';

module.exports = function(sails) {
  /**
   * Get name of the controller by file path
   * @param  {string} filePath path to controller file
   * @return {string}          controller Name
   */
  var getControllerName = function(filePath) {
    return (filePath.split('/').pop().replace('.js', ''));
  };

  /**
   * Add policy configure
   * @param {string} controller
   * @param {string} action
   * @param {string|Array} policy
   */
  var addPolicy = function(controller, action, policy) {
    if (!sails.config.policies[controller]) {
      sails.config.policies[controller] = {};
    }
    if (sails.config.policies[controller][action]) {
      // We already have something binded into configs.
      // Lets add new policy
      if (_.isString(sails.config.policies[controller][action])) {
        var existingPolicy = sails.config.policies[controller][action];
        sails.config.policies[controller][action] = [existingPolicy];
      }
      // If policy is string just adding it to array
      if (_.isString(policy)) {
        sails.config.policies[controller][action].push(policy);
      }
      // If it's array merging both arrays
      if (_.isArray(policy)) {
        sails.config.policies[controller][action].concat(policy);
      }
    } else {
      sails.config.policies[controller][action] = policy;
    }
  };

  return function hadlePolicyAnnotation(filePath, annotation) {

    //Get controller name
    var controllerName = getControllerName(filePath);
    addPolicy(controllerName, annotation.target, annotation.value);

  };
};
