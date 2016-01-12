'use strict';

import config from '../config';
import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-sass';
import handleErrors from '../util/handleErrors';
import autoprefixer from 'gulp-autoprefixer';
import browserSync from 'browser-sync';

gulp.task('styles', function() {

  return gulp.src(config.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass({
      sourceComments: true,
      outputStyle: 'nested',
      includePaths: config.styles.sassIncludePaths
    }))
    .on('error', handleErrors)
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
    .pipe(sourcemaps.write(null))
    .pipe(gulp.dest(config.styles.dest))
    .pipe(browserSync.stream({
      once: true
    }));

});
