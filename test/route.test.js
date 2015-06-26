'use strict';

var request = require('supertest');
var SailsRunner = require('./sailsRunner');


describe('Hook annotations :: ', function() {

  var sails;

  before(function(done) {


    this.timeout(10000);

    SailsRunner.lift(function(err, _sails) {

      if (err) return done(err);

      sails = _sails;

      return done();
    });
  });

  after(function(done) {

    if (sails) {
      sails.lower(done);
    }

  });

  it('Should start the sails server', function() {
    return true;
  });

  describe('Blueprint routes should be binded :: ', function() {

    it('should register AdminController.index route', function(done) {
      request(sails.hooks.http.app)
        .get('/admin')
        .expect(200, done);
    });

    it('should register AdminController.some route', function(done) {
      request(sails.hooks.http.app)
        .get('/admin/some')
        .expect(200, done);
    });

    it('should register AdminController.another route', function(done) {
      request(sails.hooks.http.app)
        .get('/admin/another')
        .expect(200, done);
    });

    it('should register the sub/SubController.index route', function(done) {
      request(sails.hooks.http.app)
        .get('/sub/sub')
        .expect(200, done);
    });

    it('should register the sub/SubController.action route', function(done) {
      request(sails.hooks.http.app)
        .get('/sub/sub/action')
        .expect(200, done);
    });

  });

  describe('Annotated routes should be binded :: ', function() {

    it('@Route("/test") should be binded to sub/SubController.index', function(done) {
      request(sails.hooks.http.app)
        .get('/test')
        .expect(200)
        .expect('SubController.index', done);
    });

    it('should /route be register ', function(done) {
      request(sails.hooks.http.app)
        .get('/route')
        .expect(200)
        .expect('AdminController.some', done);
    });
  });

  describe('HTTP Methods :: ', function() {
    it('should register the getItem route', function(done) {
      request(sails.hooks.http.app)
        .get('/getRoute')
        .expect(200)
        .expect('AdminController.another', done);
    });

    it('should /route be register ', function(done) {
      request(sails.hooks.http.app)
        .post('/getRoute')
        .expect(404, done);
    });
  });

})
