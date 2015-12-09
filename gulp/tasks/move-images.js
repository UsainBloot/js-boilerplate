'use strict';

var config = require('../config');
var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('move-images', function() {

  return gulp
    .src(config.images.src, {
      base: ''
    })
    .pipe(gulp.dest(config.images.dest))
    .pipe(browserSync.stream({ once: true }));

});
