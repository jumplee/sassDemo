var gulp = require('gulp');
// var px2rem = require('gulp-px3rem');
var autoprefixer = require('gulp-autoprefixer');
gulp.task('px2rem', function () {
  gulp.src('./form.css')
    .pipe(autoprefixer({
      browsers: [
        'ios>7',
        'android >4'
      ],
      cascade: false
    }))
    // .pipe(px2rem({
    //   baseDpr: 2, // base device pixel ratio (default: 2)
    //   threeVersion: false, // whether to generate @1x, @2x and @3x version (default: false)
    //   remVersion: true, // whether to generate rem version (default: true)
    //   remUnit: 20, // rem unit value (default: 75)
    //   remPrecision: 2 // rem precision (default: 6)
    // }))
    .pipe(gulp.dest('./dest'))
});
gulp.task('default', ['px2rem'])

