const Generator = require('yeoman-generator');
const path = require('path');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);




        this.name = 'marko-app';
        this.version = '1.0.0';
    }

    initializing() {}

    prompting() {
        const prompts = [{
            type: 'input',
            name: 'name',
            message: `Project name [${this.name}]`,
        }];



        return this.prompt(prompts).then(r => {
            this.name = r.name || this.name;
        });
    }

    configuring() {}

    default () {}

    get writing() {
        return {
            appStaticFiles() {

                this.fs.copy(this.templatePath('**/*'), this.destinationPath(this.name));

                this.fs.move(
                    this.destinationPath(`${this.name}`, 'gitignore'),
                    this.destinationPath(`${this.name}`, '.gitignore')
                );

                this.fs.move(
                    this.destinationPath(`${this.name}`, 'gitlab-ci.yml'),
                    this.destinationPath(`${this.name}`, '.gitlab-ci.yml')
                );
            }
        };
    }

    conflicts() {}

    install() {
        const appDir = path.join(process.cwd(), this.name);
        process.chdir(appDir);
        this.npmInstall();
    }

    end() {}
};