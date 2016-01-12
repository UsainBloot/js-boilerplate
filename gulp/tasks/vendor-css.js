'use strict';

import config from '../config';
import gulp from 'gulp';
import concat from 'gulp-concat';
import cssNano from 'gulp-cssnano';

gulp.task('vendor-css', function() {

  return gulp
    .src(config.vendor.css.src)
    .pipe(concat(config.vendor.css.file))
    .pipe(cssNano({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest(config.vendor.css.dest));

});
