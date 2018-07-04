var gulp = require('gulp'); 
var concat = require('gulp-concat'); 
var stripDebug = require('gulp-strip-debug'); 
var uglify = require('gulp-uglify'); 
var jshint = require('gulp-jshint'); 
var stylish = require('jshint-stylish'); 


gulp.task('scripts', function() {
  gulp.src(['scripts/*.js'])
    .pipe(concat('script.js'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('build/'));
});

gulp.task('jshint', function() {
  gulp.src('scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('default', ['scripts','jshint'], function() {
  gulp.watch('scripts/*.js', ['scripts','jshint']);
}); 
