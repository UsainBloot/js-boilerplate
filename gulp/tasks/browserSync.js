'use strict';

import config from '../config';
import gulp from 'gulp';
import browserSync from 'browser-sync';
import url from 'url';

gulp.task('browserSync', function() {

  browserSync({
    server: {
      baseDir: 'public',
      middleware: function(req, res, next) {
        let paramIndex = url.parse(req.url).href.indexOf('?');
        let fileHrefArray = url.parse(req.url).href.split('.');
        if (paramIndex > -1) {
          fileHrefArray = url.parse(req.url).href.substring(0, paramIndex).split('.');
        }
        let fileExtension = fileHrefArray[fileHrefArray.length - 1];

        if (config.files.asset_extensions.indexOf(fileExtension) === -1) {
          req.url = '/' + config.files.default_file;
        }

        return next();
      }
    }
  });

});
