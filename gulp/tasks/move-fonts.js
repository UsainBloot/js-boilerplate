'use strict';

var config = require('../config');
var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('move-fonts', function() {

  return gulp
    .src(config.fonts.src, {
      base: ''
    })
    .pipe(gulp.dest(config.fonts.dest))
    .pipe(browserSync.stream({
      once: true
    }));

});
