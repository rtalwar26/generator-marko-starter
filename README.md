### Generator Marko Starter


Yeoman generator to generate a marko-starter project. `mobile` route uses (Framework7)[http://framework7.io/]

> Make sure you have marko-starter installed globally 

```shell
npm install -g marko-starter
``` 

Installing Yeoman globally
```shell

npm install -g yo
```

Install the generator

```shell
 npm install -g generator-marko-starter
```

Usage

```shell
 yo marko-starter
```

## Running the project

```shell
cd \<project-dir\>
npm start
```

### By Default few routes are created under src/routes and are served at following urls

 http://localhost:8080/hello

### Mobile App using Framework7 is being served at 

http://localhost:8080/mobile


----
# Building

> To make sure the links work during development and when deployed to github/gitlab pages
> make sure u use **\<a-rel\>** tag 

```html
<a-rel href="/mobile"></a-rel>

```

> For example usage have a look at `src/routes/hello/index.marko`
## Build and deploy to github pages

Under package.json change `baseurl` to `/<your_github_repo_name>`

Example

if you have a repo at https://github.com/jacob26/**sample-web-app** then **package.json** should look like

```json


  "baseurl": "/<sample-web-app>"
```

Then 

```shell
npm run build:deploy
git push -u origin master
```


Your website will be served at **https://jacob26.github.io/sample-web-app**


------


## Build and deploy to gitlab pages

> .gitlab-ci.yml is already included so no extra steps are needed

Under package.json change `baseurl` to `/<your_github_repo_name>`

Example

if you have a repo at https://github.com/jacob26/**sample-web-app** then **package.json** should look like

```json
  "baseurl": "/<sample-web-app>"
```

Then 

```shell
npm run build:deploy
git push -u origin master
```


Your website will be served at **https://jacob26.gitlab.io/sample-web-app**
