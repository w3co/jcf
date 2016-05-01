var gulp = require('gulp'),
    csso = require('gulp-csso'),
    uglify = require('gulp-uglify'),
    del = require('del');

gulp.task('clean', function() {
    return del('dist');
});

gulp.task('js:compress', ['clean'], function() {
  return gulp.src('js/**/jcf*.js')
    .pipe(uglify({ preserveComments: 'license' }))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('css:compress', ['clean'], function () {
  return gulp.src('css/**/jcf*.css')
    .pipe(csso())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('build', ['js:compress', 'css:compress']);
