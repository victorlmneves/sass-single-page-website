// dependencies --------------------

// dependencies: gulp
const gulp = require('gulp');



// vars --------------------

// browserSync
browserSync = global.browserSync;



// global vars --------------------
global.var = {

  // flags
  flag: {
    dev: true
  },

  build: {
    base: '/dist'
  },

  // project
  project: {
    base: () => {
      return `${process.cwd()}`; // ./
    },
    src: () => {
      return `${global.var.project.base}/src`; // ./src
    },
    dest: () => {
      return `${global.var.project.base}${global.var.build.base}`; // ./dist
    },
    assets: {
      src: () => {
        return `${global.var.project.src}/assets`; // ./src/assets
      },
      dest: () => {
        return `${global.var.project.dest}/assets`; // ./dist/assets
      },
      css: () => {
        return `/css`; // /css
      },
      sass: () => {
        return `/sass`; // /sass
      },
      fonts: () => {
        return `/fonts`; // /fonts
      },
      images: () => {
        return `/images`; // /images
      }
    }
  },

  // browsersync
  browserSync: {
    baseDir: './',
    port: 3000,
    options: {
      browser: [
        'chrome',
        // 'firefox',
        // 'iexplorer',
        // 'safari'
      ]
    }
  },

  // tasks
  tasks: {
    watch: [
      'browser-sync',
      'images',
      'html',
      'sass'
    ],
    build: [
      'html',
      'sass',
      'images',
      'copy'
    ],
  },

  // html
  html: {
    src: () => {
      return `${global.var.project.src}/**/*.html`;
    },
    dest: () => {
      return `${global.var.project.dest}`;
    },
    watch: () => {
      return `${global.var.html.src}`;
    }
  },

  // sass
  sass: {
    src: () => {
      return `${global.var.project.assets.src}${global.var.project.assets.sass}/*.{sass,scss}`;
    },
    dest: () => {
      return `${global.var.project.assets.dest}${global.var.project.assets.css}`;
    },
    options: {
      errLogToConsole: true,
      outputStyle: 'expanded',
    },
    autoprefixer: {
      browsers: ['last 2 versions', '> 5%', 'Firefox >= 20', 'Explorer >= 9']
    },
    watch: () => {
      return `${global.var.project.assets.src}${global.var.project.assets.sass}/**/*.{sass,scss}`;
    }
  },

  // images
  images: {
    src: () => {
      return `${global.var.project.assets.src}${global.var.project.assets.images}/**/*.{jpeg,jpg,png,gif,svg,ico}`;
    },
    dest: () => {
      return `${global.var.project.assets.dest}${global.var.project.assets.images}`;
    },
    watch: () => {
      return `${global.var.project.assets.src}${global.var.project.assets.images}/**/*`;
    }
  }
};



// resolvers --------------------

function resolveVars(obj) {
  for(let prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      if(typeof obj[prop] === 'object') {
        resolveVars(obj[prop]);
      }
      else {
        if(typeof obj[prop] === 'function') {
          obj[prop] = obj[prop].call();
        }
      }
    }
  }
}

resolveVars(global.var);
