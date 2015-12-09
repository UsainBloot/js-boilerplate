'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function(callback) {

  runSequence(
    'clean', ['js-hint'], ['scripts', 'vendor-js', 'styles', 'vendor-css', 'move-html', 'move-images', 'move-fonts'], 'test',
    callback);

});