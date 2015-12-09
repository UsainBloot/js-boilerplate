'use strict';

var config = require('../config');
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('vendor-js', function() {

  return gulp
    .src(config.vendor.js.src)
    .pipe(concat(config.vendor.js.file))
    .pipe(uglify())
    .pipe(gulp.dest(config.vendor.js.dest));

});