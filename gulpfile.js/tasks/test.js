// dependencies --------------------

// dependencies: gulp
const gulp = require('gulp');

// dependencies: utils
const notifier = require('node-notifier');



// tasks --------------------

// tasks: test
gulp.task('test', function() {
  console.log(' -> "test" task running...');

  console.log(global.var.scripts.exclude);
});

// tasks: test-vars
gulp.task('test-vars', function() {
  console.log(' -> "sassdoc" task running...');

  testVars(global.var);
});



// functions --------------------

// functions testVars
function testVars(obj, str, lvl, errors) {
  let log = '  ';
  let index = 0;
  let level = lvl || 0;
  let objErrors = errors || {};

  if (str) log += str;

  if (level === 0) {
    console.log('########################################');
    console.log('#');
    console.log('# GLOBAL VARS TESTS:');
    console.log('#');
  }

  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'undefined') {
        objErrors[key] = obj[key];
      }
      if(typeof obj[key] !== 'object') {
        console.log('#' + log + '   ', key + ':', obj[key]);
      }
      else {
        console.log('#' + log + '   ', key + ':');
        testVars(obj[key], log, 1, objErrors);
      }
    }
    index++;
  }
  if (level === 0 && index == Object.keys(obj).length) {
    console.log('#');
    console.log('########################################');
    console.log('#');
    console.log('# ERRORS:');
    console.log(`# [${Object.keys(objErrors).length}] Error(s) in vars.js file`);
    console.log('#');
    for(let key in objErrors) {
      if(objErrors.hasOwnProperty(key)) {
        console.log(`# ${key}: ${objErrors[key]}`);
        console.log('#');
      }
    }
    console.log('########################################');

    notifier.notify({
      title: (Object.keys(objErrors).length <= 0) ? 'Success' : 'Error',
      message: `[${Object.keys(objErrors).length}] Error(s) in vars.js file`,
      type: (Object.keys(objErrors).length <= 0) ? 'info' : 'error'
    });
  }
}
