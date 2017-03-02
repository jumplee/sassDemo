var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var sprites = require('postcss-sprites');
var rename = require("gulp-rename");
gulp.task('sprite', function () {
  return gulp.src('./sass/icon.src.scss')
    .pipe(postcss([
      sprites({
        retina: true,
        padding: 3,
        stylesheetPath: './css/',
        spritePath: './images/'
      })
    ]))
    .pipe(rename(function (path) {
      path.basename = 'icon'
    }))
    .pipe(gulp.dest('./sass'))
})

gulp.task('watch_sprite', function () {
  gulp.watch('./sass/icon.src.scss', ['sprite'])
})
var mobileArray = [
  'ios>7',
  'android >4',
  'and_uc>1',
  'and_chr>1'
]
var pcArray = [
  'ie >8',
  '>1%'
]
gulp.task('prefix', function () {
  return gulp.src('./css/main.css')
    .pipe(postcss([
      autoprefixer({
        browsers: pcArray,
        cascade: false
      })
    ]))
    .pipe(rename(function (path) {
      path.basename = path.basename+'.dist'
    }))
    .pipe(gulp.dest('./css'))
})