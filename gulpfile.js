const gulp = require('gulp');
const gulpSass = require('gulp-sass');
//compile with gulpSass
const sass = gulpSass(require('sass'));

// gulp.task('sass',async function () {
//     //convert all files with scss extention to css
//     //and push it in css folder
//     gulp.src('src/components/**/*.scss').pipe(sass()).pipe(gulp.dest('src/css'));
// })
gulp.task('watch',async function(){
    gulp.watch('src/components/**/*.scss',async function(){
        gulp.src('src/components/**/*.scss').pipe(sass()).pipe(gulp.dest('src/css'))
    })
})