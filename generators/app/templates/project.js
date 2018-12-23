const fs = require("fs");
const packageConfig = JSON.parse(fs.readFileSync("./package.json", "utf8"));
const isProduction = process.env.NODE_ENV && (process.env.NODE_ENV.trim() === 'production');
const isGithubPublish = process.env.GITHUB_PUBLISH && (process.env.GITHUB_PUBLISH.trim() === 'true');
const isAndroidPublish = process.env.ANDROID_APP && (process.env.ANDROID_APP.trim() === 'true');
const project_name = "marko-starter"

module.exports = require("marko-starter").projectConfig({
  name: project_name, // Optional, but added here for demo purposes
  lassoConfig: {
    require: {
      transforms: [{
        transform: 'lasso-babel-transform',
        config: {
          extensions: ['.js', '.es6'] // Enabled file extensions. Default: ['.js', '.es6']
        }
      }]
    },
    outputDir: isGithubPublish || isAndroidPublish ? `dist/static` : '.cache/static',
    bundlingEnabled: isProduction,
    "bundles": [{
      "name": "framework7",
      "dependencies": [{
        "path": "framework7/js/framework7.js"
      }]
    }],
    fingerprintsEnabled: isProduction,
    urlPrefix: isGithubPublish ? `${packageConfig.baseurl || ""}/static` : (isAndroidPublish ? 'static' : '/static'),
    minifyJS: false,
    plugins: [
      'lasso-marko'
    ]
  }
});
