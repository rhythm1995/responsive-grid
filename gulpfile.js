const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('taskLess',function () {
    gulp.src('public/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('public/css'));
});

gulp.task('taskWatch',function () {
    gulp.watch('public/**/*.less',['taskLess'])
});

gulp.task('default',['taskLess','taskWatch']);