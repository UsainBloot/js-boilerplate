'use strict';

import config from '../config';
import gulp from 'gulp';

gulp.task('watch', ['browserSync'], function() {

  gulp.watch(config.scripts.src, ['js-hint']);
  gulp.watch(config.styles.all, ['styles']);
  gulp.watch(config.images.src, ['move-images']);
  gulp.watch(config.fonts.src, ['move-fonts']);
  gulp.watch(config.html.src, ['move-html']);

});
