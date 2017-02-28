var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var sprites = require('postcss-sprites');
var rename = require("gulp-rename");
var post = require('postcss')
var opts = {
  stylesheetPath: './dist',
  spritePath: './dist/images/'
};
gulp.task('prefix', function () {
  return gulp.src('./form/form.css')
    .pipe(postcss([
      autoprefixer({
        browsers: [
          'ios>7',
          'android >4'
        ],
        cascade: false
      })
    ]))
    .pipe(gulp.dest('./form/dist'))
})

var updateRule = require('postcss-sprites/lib/core').updateRule;
gulp.task('sprite', function () {
  return gulp.src('./sprite/sass/icon.src.scss')
    .pipe(postcss([
      // autoprefixer({
      //   browsers: [
      //     'ios>7',
      //     'android >4'
      //   ],
      //   cascade: false
      // }),
      sprites({
        retina: true,
        padding: 3,
        stylesheetPath: './sprite/css/',
        spritePath: './sprite/images/',
        hooks: {
          onUpdateRule: function (rule, token, image) {
            // Use built-in logic for background-image & background-position
            updateRule(rule, token, image);
            //还是由自己来决定宽高吧
            // ['width', 'height'].forEach(function (prop) {
            //   rule.insertAfter(rule.last, post.decl({
            //     prop: prop,
            //     value: image.coords[prop] / image.ratio + 'px'
            //   }));
            // });
          }
        }
      })
    ]))
    .pipe(rename(function (path) {
      path.basename='icon'
    }))
    .pipe(gulp.dest('./sprite/sass'))
})

gulp.task('watch_sprite', function () {
  gulp.watch('./sprite/css/icon.css', ['sprite'])
})