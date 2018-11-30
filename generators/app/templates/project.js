const fs = require("fs");
const packageConfig = JSON.parse(fs.readFileSync("./package.json","utf8"));
const isProduction = process.env.NODE_ENV && (process.env.NODE_ENV.trim() === 'production');
const isGithubPublish = process.env.GITHUB_PUBLISH && (process.env.GITHUB_PUBLISH.trim() === 'true');
const project_name = "marko-starter"

module.exports = require("marko-starter").projectConfig(isGithubPublish ? {
  name: project_name, // Optional, but added here for demo purposes
  lassoConfig: {
    outputDir: "dist/static",
    bundlingEnabled: isProduction,
    fingerprintsEnabled: isProduction,
    urlPrefix:`${packageConfig.baseurl || ""}/static`,    
    minifyJS: false,
    plugins: [
        'lasso-marko'
    ]
}
} : {
  name: project_name, // Optional, but added here for demo purposes
});
