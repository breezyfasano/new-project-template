var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src('docs/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('docs/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});


gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'docs'
        },
    })
})

gulp.task('watch', ['browserSync', 'sass'], function () {
    gulp.watch('docs/scss/**/*.scss', ['sass']);
    gulp.watch('docs/*.html', browserSync.reload);
    gulp.watch('docs/js/**/*.js', browserSync.reload);
});

// $ gulp watch is the command to start the sass/browsersync processes