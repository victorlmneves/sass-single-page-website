// dependencies --------------------

// dependencies: gulp
const gulp = require('gulp');

// dependencies: sass
const sass = require('gulp-sass'),
      sourcemaps = require('gulp-sourcemaps'),
      autoprefixer = require('gulp-autoprefixer');

// dependencies: utils
const plumber = require('gulp-plumber'),
      rename = require('gulp-rename'),
      notify = require('gulp-notify'),
      csso = require('gulp-csso'),
      gulpif = require('gulp-if');



// tasks --------------------

// tasks: sass
gulp.task('sass', () => {
  console.log(' -> "sass" task running...');

  return gulp
    .src(`${global.var.sass.src}`)
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(gulpif(global.var.flag.dev == true, sourcemaps.init()))
    .pipe(sass(global.var.sass.options).on('error', sass.logError))
    .pipe(autoprefixer(global.var.sass.autoprefixer))
    .pipe(gulpif(global.var.flag.dev == true, sourcemaps.write()))
    // .pipe(gulpif(global.var.flag.dev == false, rename({suffix: '.min'})))
    .pipe(gulpif(global.var.flag.dev == false, csso()))
    .pipe(gulp.dest(`${global.var.sass.dest}`))
    .pipe(notify({
      title: 'Success',
      message: `Sass generated successfully`,
      type: 'info'
    }))
    .pipe(gulpif(browserSync.active, browserSync.stream()));
});
