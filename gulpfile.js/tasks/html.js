// dependencies --------------------

// dependencies: gulp
const gulp = require('gulp');

// dependencies: utils
const plumber = require('gulp-plumber'),
      notify = require("gulp-notify");
      gulpif = require('gulp-if');



// tasks --------------------

// tasks: html
gulp.task('html', () => {
  console.log(' -> "html" task running...');

  return gulp.src(`${global.var.html.src}`)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(gulp.dest(global.var.html.dest))
    .pipe(notify({
      title: 'Success',
      message: `html files generated successfully`,
      type: 'info'
    }))
    .pipe(gulpif(browserSync.active, browserSync.stream()));
});
