// dependencies --------------------

// dependencies: gulp
const gulp = require('gulp');



// tasks --------------------

// tasks: build
gulp.task('build', ['clean'], function() {
  console.log(' -> "build" task running...');

  global.var.flag.dev = false;

  gulp.start(global.var.tasks.build);
});
