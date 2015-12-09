'use strict';

var config = require('../config');
var gulp = require('gulp');
var browserSync = require('browser-sync');
var url = require('url');

gulp.task('browserSync', function() {

  browserSync({
    server: {
      baseDir: 'public',
      middleware: function(req, res, next) {
        var paramIndex = url.parse(req.url).href.indexOf('?');
        var fileHrefArray = url.parse(req.url).href.split('.');
        if (paramIndex > -1) {
          fileHrefArray = url.parse(req.url).href.substring(0, paramIndex).split('.');
        }
        var fileExtension = fileHrefArray[fileHrefArray.length - 1];

        if (config.files.asset_extensions.indexOf(fileExtension) === -1) {
          req.url = '/' + config.files.default_file;
        }

        return next();
      }
    }
  });

});