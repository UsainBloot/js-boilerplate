'use strict';

var config = require('../config');
var gulp = require('gulp');
var browserify = require('browserify');
var html = require('html-browserify');
var hogan = require('hoganify');
var watchify = require('watchify');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');

gulp.task('scripts', function() {

  var bundler = browserify({
    entries: [config.scripts.entryPoint],
    debug: true,
    transform: [html, hogan]
  });

  if (global.isDev) {
    bundler = watchify(bundler);

    bundler.on('update', function() {
      rebundle();
      gutil.log('Rebundle...');
    });
  }

  function rebundle() {
    var stream = bundler.bundle();
    return stream
      .pipe(source(config.scripts.all))
      .pipe(buffer())
      .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(sourcemaps.write(config.scripts.maps))
      .pipe(gulp.dest(config.scripts.dest))
      .pipe(browserSync.stream({
        once: true
      }));
  }

  return rebundle();

});
