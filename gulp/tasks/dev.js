'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dev', function(callback) {

  global.isDev = true;
  runSequence(
    'clean', ['js-hint'], ['scripts', 'vendor-js', 'styles', 'vendor-css', 'move-html', 'move-images', 'move-fonts'], 'watch',
    callback);

});