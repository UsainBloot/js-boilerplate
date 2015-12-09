'use strict';

var config = require('../config');
var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');

gulp.task('vendor-css', function() {

  return gulp
    .src(config.vendor.css.src)
    .pipe(concat(config.vendor.css.file))
    .pipe(minifyCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest(config.vendor.css.dest));

});