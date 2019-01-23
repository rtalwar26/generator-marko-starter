const isGithubPublish = process.env.GITHUB_PUBLISH && (process.env.GITHUB_PUBLISH.trim() === 'true');
const isCordovaPublish = process.env.CORDOVA_BUILD && (process.env.CORDOVA_BUILD.trim() === 'true');

module.exports = class {
  onInput(input, out) {


    let isRelative = input.href && (input.href.charAt(0) === "/");
    const packageConfig = JSON.parse(require("fs").readFileSync("./package.json", "utf8"));
    input.href = isGithubPublish && isRelative ? `${packageConfig.baseurl}${input.href}` : input.href;
    input.href = isCordovaPublish ? `${input.href}.html` : input.href;
    input.class = input.class || "";

  }

}
