'use strict';

module.exports = function(sails) {

	return {

		defaults: require('./lib/defaults'),

		configure: require('./lib/configure')(sails)
	};
};
