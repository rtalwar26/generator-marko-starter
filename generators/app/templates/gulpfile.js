const gulp = require('gulp')

const directoryName = 'docs';

const fs = require('fs')

var exec = require('child_process').exec;

function copy() {

    return gulp.src(['./dist/**/*'])
        .pipe(gulp.dest(`./${directoryName}`))

}

var del = require('del');

function clean() {
  return del([
    'dist/**/*',
    // here we use a globbing pattern to match everything inside the `mobile` folder
    '.cache/**/*'
  ]);
}
exports.copy = copy;




var build = gulp.series(clean,buildShell , copy);

function buildShell(done) {
    let isWindows = process.platform === "win32";
    let cmd = isWindows ? `set GITHUB_PUBLISH=true && set LASSO_TIMEOUT=60000 && set NODE_ENV=production && marko-starter build` :`GITHUB_PUBLISH=true LASSO_TIMEOUT=60000 NODE_ENV=production marko-starter build`
    
    exec(cmd, function (err, stdout, stderr) {
        console.log(stdout);
        err && console.log(err);
        done();
    });



}

gulp.task('build', build);
gulp.task('default', build);

// gulp.task('watch', );