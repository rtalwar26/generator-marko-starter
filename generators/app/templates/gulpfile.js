const gulp = require('gulp')
const zipdir = require('zip-dir');
const directoryName = 'docs';
var outputDirectory = `./${directoryName}`
var replace = require('gulp-replace');
var rename = require("gulp-rename");
const fs = require('fs')
const packageConfig = JSON.parse(fs.readFileSync("./package.json", "utf8"));

var exec = require('child_process').exec;

function copy() {

  return gulp.src(['./dist/**/*', './package.json'])
    .pipe(gulp.dest(`./${directoryName}`))

}

function makeAndroidReady() {
  return gulp.src([`./dist/mobile/index.html`])
    .pipe(replace(`${packageConfig.baseurl || ""}/static`, 'static'))
    .pipe(rename("main.html"))
    .pipe(gulp.dest(`./${directoryName}`));
}

function zipDistribution() {
  return new Promise((resolve, reject) => {
    zipdir(outputDirectory, {
      saveTo: outputDirectory + "/dist.zip"
    }, function (err, buffer) {
      // `buffer` is the buffer of the zipped file
      // And the buffer was saved to `~/myzip.zip`
      if (err) {
        console.log('unable to create zip', err)
        reject(err);
      } else {
        console.log('zipping done')
        resolve();
      }
    });
  })

}
var del = require('del');

function cleanDist() {
  return del([
    './dist/**/*',
    // here we use a globbing pattern to match everything inside the `mobile` folder
    '.cache/**/*'
  ]);
}

function cleanDocs() {
  return del([
    './docs/**/*',

  ]);
}

exports.copy = copy;




var build = gulp.series(cleanDist, cleanDocs, buildShellAndroid, makeAndroidReady, cleanDist, buildShell, copy);
var buildMobile = gulp.series(cleanDist, cleanDocs, buildShellAndroid, makeAndroidReady, copy, cleanDist, buildShell, copy, zipDistribution);

function buildShellAndroid(done) {
  let isWindows = process.platform === "win32";
  let cmd = isWindows ? `set ANDROID_APP=true && set LASSO_TIMEOUT=60000 && set NODE_ENV=production && marko-starter build` : `ANDROID_APP=true LASSO_TIMEOUT=60000 NODE_ENV=production marko-starter build`

  exec(cmd, function (err, stdout, stderr) {
    console.log(stdout);
    err && console.log(err);
    done();
  });
}

function buildShell(done) {
  let isWindows = process.platform === "win32";
  let cmd = isWindows ? `set GITHUB_PUBLISH=true && set LASSO_TIMEOUT=60000 && set NODE_ENV=production && marko-starter build` : `GITHUB_PUBLISH=true LASSO_TIMEOUT=60000 NODE_ENV=production marko-starter build`

  exec(cmd, function (err, stdout, stderr) {
    console.log(stdout);
    err && console.log(err);
    done();
  });
}

gulp.task('build', build);
gulp.task('default', build);
gulp.task('mobile', buildMobile);
// gulp.task('watch', );
