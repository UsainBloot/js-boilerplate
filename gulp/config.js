'use strict';

module.exports = {

  files: {
    default_file: 'index.html',
    asset_extensions: ['js', 'css', 'png', 'jpg', 'jpeg', 'gif', 'ttf', 'woff', 'woff2']
  },

  tests: {
    config: '/../../tests/karma.conf.js'
  },

  scripts: {
    src: ['source/js/**/*.js'],
    entryPoint: './source/js/main.js',
    dest: './public/js',
    all: 'all.js',
    maps: './maps'
  },

  styles: {
    src: ['source/scss/main.scss'],
    dest: 'public/css/',
    sassIncludePaths: []
  },

  vendor: {
    js: {
      src: [
        'node_modules/jquery/dist/jquery.js',
      ],
      dest: 'public/js',
      file: 'vendor.js',
    },

    css: {
      src: [''],
      dest: 'public/css',
      file: 'vendor.css'
    }
  },

  html: {
    src: 'source/*.html',
    dest: 'public/'
  },

  images: {
    src: ['source/images/**/*.*'],
    dest: 'public/img'
  },

  fonts: {
    src: ['source/fonts'],
    dest: 'public/fonts'
  },

  clean: {
    src: ['public']
  }

};
