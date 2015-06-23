'use strict';

var util = require('../../../lib/util');

var expect = require('chai').expect;

describe('Util :: ', function() {

  describe('getControllerName() :: ', function() {
    it('To be defined', function() {
      expect(util.getControllerName).to.exist
        .and.to.be.instanceOf(Function);
    });

    it('Should return full controller name', function() {
      var path = '/somewhere/TestController.js';
      expect(util.getControllerName(path)).to.be.eq('somewhere/TestController');
    });

    it('should work with Controllername.coffee', function() {
      var path = '/TestController.coffee';
      expect(util.getControllerName(path)).to.be.eq('TestController');
    });
  });
});
