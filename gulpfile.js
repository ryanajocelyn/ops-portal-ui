var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var babel = require('gulp-babel');
var babelReact = require('babel-preset-react');
var es2015 = require('babel-preset-es2015');
var stage0 = require('babel-preset-stage-0');
var sourcemaps = require('gulp-sourcemaps');
var htmlreplace = require('gulp-html-replace');
var webpack = require('webpack-stream');

var path = {
  HTML: './index.html',
  ALL: ['./src/*.js', './src/**/*.js', './src/**/*.css', '!./src/asset/**/*.js'],
  JS: ['./src/*.js', './src/**/*.js', '!./src/asset/**/*.js'],
  MINIFIED_OUT: './main.min.js',
  DEST_SRC: './dist/src',
  DEST_BUILD: './dist/build',
  DEST: './dist'
};

gulp.task ('transform', function() {
    gulp.src(path.JS)
        .pipe(react())
        .pipe(gulp.dest(path.DEST_SRC));
});

gulp.task('copy', function() {
    gulp.src(path.ALL)
        .pipe(gulp.dest(path.DEST_SRC));
});

gulp.task('watch', function() {
    gulp.watch(path.ALL, ['transform', 'copy']);
});

gulp.task('build', function(){
  gulp.src(path.JS)
      .pipe(sourcemaps.init())
      .pipe(babel({
          plugins: ['transform-decorators-legacy'],
          presets: [babelReact, es2015, stage0]
      }))
      .pipe(concat(path.MINIFIED_OUT))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task('webpack', function() {
    const webpackConfig = require ('./webpack.config.js');

    return gulp.src('')
               .pipe(webpack(webpackConfig))
               .pipe(gulp.dest(path.DEST_BUILD))
});

gulp.task('replaceHTML', function(){
  gulp.src(path.HTML)
      .pipe(htmlreplace({
          'js': 'build/' + path.MINIFIED_OUT
      }))
      .pipe(gulp.dest(path.DEST));
});

gulp.task('default', ['webpack']);

gulp.task('production', ['replaceHTML', 'build']);
