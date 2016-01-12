'use strict';

import config from '../config';
import gulp from 'gulp';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';

gulp.task('vendor-js', function() {

  return gulp
    .src(config.vendor.js.src)
    .pipe(concat(config.vendor.js.file))
    .pipe(uglify())
    .pipe(gulp.dest(config.vendor.js.dest));

});
