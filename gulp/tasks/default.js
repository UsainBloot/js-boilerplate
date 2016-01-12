'use strict';

import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('default', function(callback) {

  runSequence(
    'clean', ['js-hint'], ['scripts', 'vendor-js', 'styles', 'vendor-css', 'move-html', 'move-images', 'move-fonts'], 'test',
    callback);

});
