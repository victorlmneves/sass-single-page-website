// dependencies --------------------

// dependencies: gulp
const gulp = require('gulp');



// tasks --------------------

// tasks: watch
gulp.task('watch', global.var.tasks.watch, () => {
  console.log(' -> "watch" task running...');

  // html
  gulp.watch(global.var.html.watch, {cwd: global.var.html.watch}, ['html']);

  // sass
  gulp.watch(global.var.sass.watch, {cwd: global.var.sass.watch}, ['sass']);

  // images
  gulp.watch(global.var.images.watch, {cwd: global.var.images.watch}, ['images']);
});
