var gulp = require('gulp');
var sass = require('gulp-sass');
const watchSass = require("gulp-watch-sass")

gulp.task('sass', function(){
  return gulp.src('styles/scss/styles.scss').pipe(sass()).pipe(gulp.dest('styles/css'))
})

gulp.task('watch', function(){
    gulp.watch('styles/scss/*.scss', gulp.series('sass'));
});
