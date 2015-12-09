'use strict';

var config = require('../config');
var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('move-html', function() {

  return gulp
    .src(config.html.src, {
      base: ''
    })
    .pipe(gulp.dest(config.html.dest))
    .pipe(browserSync.stream({
      once: true
    }));

});
