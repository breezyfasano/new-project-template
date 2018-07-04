var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src('site/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('site/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});


gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'site'
        },
    })
})

gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch('site/scss/**/*.scss', ['sass']);
    gulp.watch('site/*.html', browserSync.reload);
    gulp.watch('site/js/**/*.js', browserSync.reload);
});

// $ gulp watch is the command to start the sass/browsersync processes