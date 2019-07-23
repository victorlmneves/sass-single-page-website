// dependencies --------------------

// dependencies: gulp
const gulp = require('gulp');


// requires --------------------

// requires: files
require('./vars');
require('./tasks/browser-sync');
require('./tasks/sass');
require('./tasks/html');
require('./tasks/images');
require('./tasks/watch');
require('./tasks/copy');
require('./tasks/clean');
require('./tasks/build');
require('./tasks/test');



// tasks --------------------

// tasks: default
gulp.task('default', () => {
  gulp.start('watch');
});



// info --------------------

// info: terminal run tasks
// [1] gulp watch    --> (dev mode)
// [2] gulp sass     --> (generate non-minified css files)
// [3] gulp build    --> (generate minified css files with .min prefix)
// [4] gulp test     --> (test global vars in vars.js file)
// [5] gulp sitemap  --> (generate sitemap for urls)
// [6] gulp webshot  --> (generate thumbs for sitemap) - (ATTENTION: this task takes a long to run)
