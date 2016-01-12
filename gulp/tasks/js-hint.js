'use strict';

import config from '../config';
import gulp from 'gulp';
import jshint from 'gulp-jshint';

gulp.task('js-hint', function() {

  return gulp.src(config.scripts.src)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));

});
