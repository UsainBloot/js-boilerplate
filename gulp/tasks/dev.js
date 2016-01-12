'use strict';

import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('dev', function(callback) {

  global.isDev = true;
  runSequence(
    'clean', ['js-hint'], ['scripts', 'vendor-js', 'styles', 'vendor-css', 'move-html', 'move-images', 'move-fonts'], 'watch',
    callback);

});
