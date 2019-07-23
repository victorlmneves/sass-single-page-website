// dependencies --------------------

// dependencies: gulp
const gulp = require('gulp');



// vars --------------------

// vars: browser-sync
global.browserSync = require("browser-sync").create();



// tasks --------------------

// tasks: browser-sync
gulp.task('browser-sync', () => {
  console.log(' -> "browser-sync" task running...');

  let filesArray = [];
  let staticArray = [];

  // global.var.browserSync.watch.forEach((item, index) => {

  //   if (item !== global.var.frmk.neo.theme) {
  //     // console.log('item: ----------');
  //     // console.log(item);
  //     filesArray.push(item + '/**/*');
  //   }

  //   staticArray.push({
  //     route: '/web/' + item.split('/').pop(),
  //     dir: item
  //   });
  // });

  browserSync.init({
    port: global.var.browserSync.port,
    server: `.${global.var.build.base}`,
    // proxy: global.var.browserSync.proxy,
    // open: false, // do not automatically open browser
    // startPath: global.var.browserSync.startPath,
    // files: filesArray,
    // serveStatic: staticArray,
    browser: global.var.browserSync.browser
  });
  // }, browserSyncReuseTab);
});
