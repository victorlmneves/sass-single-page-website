// dependencies --------------------

// dependencies: gulp
const gulp = require('gulp');

// dependencies: utils
const imagemin = require('gulp-imagemin');



// tasks --------------------

// tasks: images
gulp.task('images', function() {
  console.log(' -> "images" task running...');

  return gulp.src(`${global.var.images.src}`)
    .pipe(imagemin())
    .pipe(gulp.dest(`${global.var.images.dest}`));
});
