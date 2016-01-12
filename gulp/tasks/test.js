'use strict';

import config from '../config';
import gulp from 'gulp';
import Server from 'karma';

gulp.task('test', function(done) {

  new Server.Server({
    configFile: __dirname + config.tests.config,
    singleRun: true
  }, done).start();

});
