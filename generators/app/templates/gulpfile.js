const gulp = require('gulp')
const zipdir = require('zip-dir');
const directoryName = 'docs';
const path = require('path')

var outputDirectory = path.resolve(`.`, `${directoryName}`)

var replace = require('gulp-replace');
var rename = require("gulp-rename");
const fs = require('fs')
const packageConfig = JSON.parse(fs.readFileSync(path.resolve(".", "package.json"), "utf8"));

var exec = require('child_process').exec;

function copy() {

  return gulp.src([path.resolve('.', "dist", "**", "*"), path.resolve('.', 'package.json')])
    .pipe(gulp.dest(path.resolve('.', directoryName)))


}

function makeAndroidReady() {
  return gulp.src([path.resolve(`.`, `dist`, 'mobile', `index.html`)])
    .pipe(replace(`${packageConfig.baseurl || ""}/static`, 'static'))
    .pipe(rename("main.html"))
    .pipe(gulp.dest(path.resolve('.', directoryName)));
}

function makeCordovaReady(done) {
  let pages = fs.readdirSync(path.join(__dirname, 'src', 'routes'));
  for (let page of pages) {
    let p = path.join(__dirname, directoryName, page, 'index.html');
    let np = path.join(__dirname, directoryName, `${page}.html`);
    console.info(`Moving ${p}->${np}`);
    fs.lstatSync(p).isFile() && fs.renameSync(p, np);
  }

  done();

}

function zipDistribution() {
  return new Promise((resolve, reject) => {
    zipdir(outputDirectory, {
      saveTo: path.resolve(outputDirectory, "dist.zip")
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
    path.resolve(`.`, `dist`, `**`, `*`),
    path.resolve(`.cache`, `**`, `*`)
  ]);
}

function cleanDocs() {
  return del([
    path.resolve(`.`, `docs`, `**`, `*`)

  ]);
}

exports.copy = copy;




var build = gulp.series(cleanDist, cleanDocs, buildShellAndroid, makeAndroidReady, cleanDist, buildShell, copy);
var buildCordova = gulp.series(cleanDist, cleanDocs, buildShellCordova, copy, makeCordovaReady);

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

function buildShellCordova(done) {
  let isWindows = process.platform === "win32";
  let cmd = isWindows ? `set CORDOVA_BUILD=true && LASSO_TIMEOUT=60000 && set NODE_ENV=production && marko-starter build` : `CORDOVA_BUILD=true LASSO_TIMEOUT=60000 NODE_ENV=production marko-starter build`
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
gulp.task('cordova', buildCordova);

// gulp.task('watch', );
