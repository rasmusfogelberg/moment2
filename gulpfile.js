const {src, dest, watch, series, parallel} = require('gulp');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');

// Search paths
const files = {
    htmlPath: "src/**/*.html",
    cssPath: "src/css/*.css",
    jsPath: "src/js/*.js",
    imagePath: "src/images/*"
}

// HTML-task, copy html files
function copyHTML() {
    return src(files.htmlPath)
    .pipe(dest('pub'))
}

// JS-task, concat and minimize JS files
function jsTask() {
    return src(files.jsPath)
    .pipe(concat('main.js'))
    .pipe(terser())
    .pipe(dest('pub/js'));
}

// CSS-task, concat and minimize CSS files
function cssTask() { 
    return src(files.cssPath)
    .pipe(concat('style.css'))
    .pipe(cssnano())
    .pipe(dest('pub/css'));
}

// image-task, minimize images
function imageTask() { 
    return src(files.imagePath)
    .pipe(imagemin())
    .pipe(dest('pub/images'));
}

// Watcher
function watchTask() {
    watch([files.htmlPath, files.jsPath, files.cssPath, files.imagePath], parallel(copyHTML, jsTask, cssTask, imageTask));
}

exports.default = series (
    parallel(copyHTML, jsTask, cssTask, imageTask),
    watchTask
);