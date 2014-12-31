var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    notify = require('gulp-notify');

var config = {
    scssDir: './assets/scss'
};

gulp.task('css', function () {
    return gulp.src(config.scssDir + '/icomoon.scss')
        .pipe(sass())
        .on('error', notify.onError(function (error) {
            return 'Error: ' + error.message;
        }))
        .pipe(gulp.dest('./css'));
});

gulp.task('default', ['css']);