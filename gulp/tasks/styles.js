'use strict';

var config = require('../config');
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var handleErrors = require('../util/handleErrors');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');

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