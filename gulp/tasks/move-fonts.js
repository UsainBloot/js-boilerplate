'use strict';

import config from '../config';
import gulp from 'gulp';
import browserSync from 'browser-sync';

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
