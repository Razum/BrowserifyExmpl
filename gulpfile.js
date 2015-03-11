/**
 * Created by roman on 10.03.2015.
 */
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    gutil = require('gulp-util'),
    browserify = require('gulp-browserify'),
    rename = require('gulp-rename');



gulp.task("browserify", function() {
    return gulp.src('./js/app/app.js')
        .pipe(browserify({"transform": [ "brfs" ]}))
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('./js/'))
});


gulp.task("watch", function() {
    gulp.watch("./js/app/**/*.js", ["browserify"]);
});





