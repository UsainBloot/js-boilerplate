'use strict';

var config = require('../config');
var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('js-hint', function() {

  return gulp.src(config.scripts.src)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));

});
