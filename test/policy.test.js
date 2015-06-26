'use strict';

var request = require('supertest');
var SailsRunner = require('./sailsRunner');
var expect = require('chai').expect;

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

  describe('PolicyController :: ', function() {

    it('index without any policy', function(done) {
      request(sails.hooks.http.app)
        .get('/policy')
        .expect(200, done);
    });

    it('login protected by configuration', function(done) {
      request(sails.hooks.http.app)
        .get('/policy/login')
        .expect(403, done);
    });

    it('authed should be protected by annotation', function(done) {
      request(sails.hooks.http.app)
        .get('/policy/authed')
        .expect(403, done);
    });

    it('array should be protected by annotation', function(done) {
      request(sails.hooks.http.app)
        .get('/policy/array')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          expect(res.body).to.be.an('object');
          expect(res.body.action).to.be.eq('PolicyController.array');
          expect(res.body.first).to.be.true;
          expect(res.body.second).to.be.true;
          done();
        });
    });

    it('extended should be protected by annotation and configuration', function(done) {
      request(sails.hooks.http.app)
        .get('/policy/extended')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          expect(res.body).to.be.an('object');
          expect(res.body.action).to.be.eq('PolicyController.extended');
          expect(res.body.first).to.be.true;
          expect(res.body.second).to.be.true;
          done();
        });
    });

  });

})
