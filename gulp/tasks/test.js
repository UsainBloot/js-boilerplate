'use strict';

var config = require('../config');
var gulp = require('gulp');
var Server = require('karma').Server;

gulp.task('test', function(done) {

  new Server({
    configFile: __dirname + config.tests.config,
    singleRun: true
  }, done).start();

});