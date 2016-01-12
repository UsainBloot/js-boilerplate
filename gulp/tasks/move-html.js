'use strict';

import config from '../config';
import gulp from 'gulp';
import browserSync from 'browser-sync';

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
