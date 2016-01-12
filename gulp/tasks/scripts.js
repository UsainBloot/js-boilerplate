'use strict';

import config from '../config';
import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import html from 'html-browserify';
import hogan from 'hoganify';
import watchify from 'watchify';
import gutil from 'gulp-util';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import browserSync from 'browser-sync';

gulp.task('scripts', function() {

  let bundler = browserify({
    entries: [config.scripts.entryPoint],
    debug: true,
    transform: [babelify, html, hogan]
  });

  if (global.isDev) {
    bundler = watchify(bundler);

    bundler.on('update', function() {
      rebundle();
      gutil.log('Rebundle...');
    });
  }

  function rebundle() {
    const stream = bundler.bundle();
    return stream
      .pipe(source(config.scripts.all))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(uglify())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(config.scripts.dest))
      .pipe(browserSync.stream({
        once: true
      }));
  }

  return rebundle();

});
