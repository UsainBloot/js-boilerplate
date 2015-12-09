var gulp = require('gulp');
var clean = require('gulp-clean');
var jshint = require('gulp-jshint');
var gutil = require('gulp-util');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var replace = require('gulp-replace');
var browserify = require('browserify');
var watchify = require('watchify');
var html = require('html-browserify');
var hogan = require('hoganify');
var sass = require('gulp-sass');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var url = require('url');
var notify = require('gulp-notify');
var Server = require('karma').Server;
var reload = browserSync.reload;

var config = {
  files: {
    default_file: 'index.html',
    asset_extensions: ['js', 'css', 'png', 'jpg', 'jpeg', 'gif', 'ttf', 'woff', 'woff2']
  },
  scripts: {
    src: ['source/js/**/*.js'],
    dest: 'public/js',
    all: 'all.js'
  },
  styles: {
    src: ['source/scss/main.scss'],
    dest: 'public/css/',
    sassIncludePaths: []
  },
  vendor: {
    jsSrc: [
      'node_modules/jquery/dist/jquery.js',
    ],
    cssSrc: ['']
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

gulp.task('clean', function() {
  return gulp
    .src(config.clean.src, {
      read: false,
      force: true
    })
    .pipe(clean());
});

gulp.task('move-html', function() {
  return gulp
    .src(config.html.src, {
      base: ''
    })
    .pipe(gulp.dest(config.html.dest))
    .pipe(browserSync.stream({ once: true }));
});

gulp.task('move-images', function() {
  return gulp
    .src(config.images.src, {
      base: ''
    })
    .pipe(gulp.dest(config.images.dest))
    .pipe(browserSync.stream({ once: true }));
});

gulp.task('move-fonts', function() {
  return gulp
    .src(config.fonts.src, {
      base: ''
    })
    .pipe(gulp.dest(config.fonts.dest))
    .pipe(browserSync.stream({ once: true }));
});

gulp.task('js-hint', function() {
  return gulp.src(config.scripts.src)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('scripts', function() {
  var bundler = browserify({
    entries: ['./source/js/main.js'],
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
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./public/js'))
    .pipe(browserSync.stream({ once: true }));
  }

  return rebundle();
});

gulp.task('vendor-js', function() {
  return gulp
    .src(config.vendor.jsSrc)
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/js/'));
});

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
    .pipe(sourcemaps.write( null ))
    .pipe(gulp.dest(config.styles.dest))
    .pipe(browserSync.stream({ once: true }));
})

gulp.task('vendor-css', function() {
  return gulp
    .src(config.vendor.cssSrc)
    .pipe(concat('vendor.css'))
    .pipe(minifyCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('public/css/'));
});

gulp.task('test', function(done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'public',
      middleware: function(req, res, next) {
        var paramIndex = url.parse(req.url).href.indexOf('?');
        var fileHrefArray = url.parse(req.url).href.split('.');
        if(paramIndex > -1) {
          fileHrefArray = url.parse(req.url).href.substring(0,paramIndex).split('.');
        }
        var fileExtension = fileHrefArray[fileHrefArray.length - 1];

        if (config.files.asset_extensions.indexOf(fileExtension) === -1 ) {
          req.url = '/' + config.files.default_file;
        }

        return next();
      }
    }
  });
});

gulp.task('watch', ['browserSync'], function() {

  gulp.watch(config.scripts.src, ['js-hint']);
  gulp.watch(config.styles.src,  ['styles']);
  gulp.watch(config.images.src, ['move-images']);
  gulp.watch(config.fonts.src, ['move-fonts']);
  gulp.watch(config.html.src, ['move-html']);

});

var handleErrors = function(error) {

  if( global.isDev ) {

    var args = Array.prototype.slice.call(arguments);

    // Send error to notification center with gulp-notify
    notify.onError({
      title: 'Compile Error',
      message: '<%= error.message %>'
    }).apply(this, args);

    // Keep gulp from hanging on this task
    this.emit('end');

  } else {
    // Log the error and stop the process
    // to prevent broken code from building
    console.log(error);
    process.exit(1);
  }

};

gulp.task('default', function(callback) {
  global.isDev = false;
  runSequence(
    'clean', ['js-hint'], ['scripts', 'vendor-js', 'styles', 'vendor-css', 'move-html', 'move-images', 'move-fonts'], 'test',
    callback);
});

gulp.task('dev', function(callback) {
  global.isDev = true;
  runSequence(
    'clean', ['js-hint'], ['scripts', 'vendor-js', 'styles', 'vendor-css', 'move-html', 'move-images', 'move-fonts'], 'watch',
    callback);
});
