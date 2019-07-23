// dependencies --------------------

// dependencies: gulp
const gulp = require('gulp');

// dependencies: utils
const gulpif = require('gulp-if');



// tasks --------------------

// tasks: copy
gulp.task('copy', function() {
  console.log(' -> "copy" task running...');

  copy('fonts');
  copy('css');
});

const copy = (src, arrayExclude = false) => {
  let sourceArray = [];

  if (!arrayExclude) {
    sourceArray = `${global.var.project.assets.src}${global.var.project.assets[src]}/**/*`;
  } else {
    sourceArray = copyExclude(`${global.var.project.assets.src}${global.var.project.assets[src]}/**/*`, src, arrayExclude);
  }

  return gulp
    .src(sourceArray)
    .pipe(gulp.dest(`${global.var.project.assets.dest}${global.var.project.assets[src]}`));
}

const copyExclude = (include, src, arrayExclude) => {
  let pathsArray = [];
  pathsArray.push(include);

  arrayExclude.forEach(str => {
    pathsArray.push(`!${str}`);
  });

  console.log(pathsArray);
  return pathsArray;
}
