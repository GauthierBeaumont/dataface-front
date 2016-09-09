import gulp from 'gulp'
import less from 'gulp-less'
import watchify from 'watchify'
import browserify from 'browserify'
import browserSync from 'browser-sync'
import babelify from 'babelify'
import source from 'vinyl-source-stream'

import { handleErrors } from './gulp-handle-errors'

const envs = {
  DEV  : "DEV",
  TEST : "TEST",
  PROD : "PROD"
}

let env = envs.DEV; // Default DEV
let port = env == envs.TEST ? 3010 : 3000;

const showFileUpdated = (files) => {
  console.log('File(s) updated :');
  files.forEach((file) => {
    console.log('-' + file);
  })
}

const reactifyES6 = (file) => {
  return reactify(file, {'es6': true});
}

gulp.task('browser-sync', function() {
  browserSync.init({
    target: "localhost:" + port,
    open: env == envs.TEST ? false : true,
    port: port,
    server: {
      baseDir: "./"
    }
  })
})

gulp.task('less', () => {
  gulp.src('src/style/main.less')
    .pipe(less({strictMath: true}).on('error', handleErrors))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('./dist/style'));
})

gulp.task('copy', () => {
  gulp.src('src/images/**/*')
   .pipe(gulp.dest('dist/images'));
  gulp.src('src/style/css/**/*')
   .pipe(gulp.dest('dist/style'));
  gulp.src('src/js-extern/*')
   .pipe(gulp.dest('dist/js'));
})

gulp.task('watch', ['browser-sync'], () => {
  gulp.watch('src/style/**/*.less', ['less']);

  const watcher = watchify(browserify({
    entries: ['./src/js/index.js'],
    transform: [babelify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  }));

  return watcher.on('update', (files) => {
    watcher.bundle().on('error', handleErrors)
      .pipe(source('main.js'))
      .pipe(gulp.dest('./dist/js'))
    showFileUpdated(files);
  })
  .bundle()
  .pipe(source('main.js'))
  .pipe(gulp.dest('./dist/js'));
})

gulp.task('default', ['watch'], () => {
  gulp.run('copy')
  gulp.run('less')
  gulp.watch("./src/js/**/*.js").on('change', browserSync.reload)
})