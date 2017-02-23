var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
gulp.task('prefix', function () {
    return gulp.src('./form/form.css')
    .pipe(postcss([
        autoprefixer()
    ]))
})
var spritesmith = require('gulp.spritesmith');

gulp.task('sprite', function () {
  var spriteData = gulp.src('sprite/images/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));
  return spriteData.pipe(gulp.dest('sprite/dist'));
});