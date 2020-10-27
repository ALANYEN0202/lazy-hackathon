const { src, dest, series, parallel } = require('gulp')
const imagemin = require('gulp-imagemin');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');
const htmlmin = require('gulp-htmlmin');



function minifyImg() {
  return src('image/*')
  .pipe(imagemin())
  .pipe(dest('dist/image'))
}

function minifyHtml() {
  return src('index.html')
    .pipe(htmlmin())
    .pipe(dest('dist'))
}

function minifyCss() {
  return src('css/*')
    .pipe(cleanCSS())
    .pipe(uglifycss())
    .pipe(dest('dist/css'))
}

function uglifyJs() {
  return src('js/*.js')
  .pipe(uglify())
  .pipe(dest('dist/js'))
}

exports.default = parallel(minifyHtml)
