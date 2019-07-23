// dependencies --------------------

// dependencies: gulp
const gulp = require('gulp');

// dependencies: utils
const clean = require('gulp-clean');



// tasks --------------------

// tasks: clean
gulp.task('clean', function() {
  console.log(' -> "clean" task running...');

  return gulp.src(global.var.project.dest, {read: false})
    .pipe(clean());
});
