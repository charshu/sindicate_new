var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync');
var server = require('gulp-express');
var livereload = require('gulp-livereload');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');


gulp.task('sass', function() {

    return sass('views/client/style/scss/*.scss')
        .pipe(postcss([autoprefixer({
            browsers: ['last 2 versions']
        })]))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('views/client/style/css-dest'))
        .pipe(livereload());

});

// gulp.task('browser-sync', function() {
//     browserSync.init(null, {
//         proxy: "http://localhost:3000",
//         browser: ['google chrome'],
//         port: 3000
//
//
//     });
// });


gulp.task('default', ['sass'], function() {
    livereload.listen();
    server.run(['server.js']);
    gulp.watch(['server.js', 'app/*.js'], [server.run]);
    // เมื่อไฟล์ html หรือ css มีการเปลี่ยนแปลง ก็ให้รีเฟรช web browser
    gulp.watch(['views/*.ejs'], ['sass']);
    // gulp.watch(['views/client/style/scss/*.scss'], browserSync.reload);
    // เมื่อไฟล์ scss มีการเปลี่ยนแปลง ก็ให้ทำ task "sass"
    gulp.watch("views/client/style/scss/*.scss", ['sass']);
});

// var gulp = require('gulp'),
//         sass = require('gulp-ruby-sass'),
//         autoprefixer = require('gulp-autoprefixer'),

//
// gulp.task('express', function() {
//   var express = require('express');
//   var app = express();
//   app.use(require('connect-livereload')({port: 35729}));
//   app.use(express.static(__dirname));
//   app.listen(4000, '0.0.0.0');
// });
//
// var tinylr;
// gulp.task('livereload', function() {
//   tinylr = require('tiny-lr')();
//     tinylr.listen(35729);
// });
//
// function notifyLiveReload(event) {
//   var fileName = require('path').relative(__dirname, event.path);
//
//   tinylr.changed({
//     body: {
//       files: [fileName]
//     }
//   });
// }
//
// gulp.task('styles', function() {
//   return sass('sass', { style: 'expanded' })
//     .pipe(gulp.dest('css'))
//     .pipe(rename({suffix: '.min'}))
//     .pipe(minifycss())
//     .pipe(gulp.dest('views/client/style/css-dest'));
// });
//
// gulp.task('watch', function() {
//   gulp.watch('views/client/style/sass/*.scss', ['styles']);
//   gulp.watch(['*.ejs','view/*.ejs'], notifyLiveReload);
// //  gulp.watch('css/*.css', notifyLiveReload);
// });
//
// gulp.task('default', ['styles', 'express', 'livereload', 'watch'], function() {
//
// });
