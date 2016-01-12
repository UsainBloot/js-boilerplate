'use strict';

import config from '../config';
import gulp from 'gulp';
import browserSync from 'browser-sync';

gulp.task('move-images', function() {

  return gulp
    .src(config.images.src, {
      base: ''
    })
    .pipe(gulp.dest(config.images.dest))
    .pipe(browserSync.stream({ once: true }));

});
